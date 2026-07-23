-- user_points: stores each user's accumulated reward points and tier

CREATE TABLE IF NOT EXISTS public.user_points (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  points      integer     NOT NULL DEFAULT 0,
  tier        text        NOT NULL DEFAULT 'Bronze',
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Row Level Security
ALTER TABLE public.user_points ENABLE ROW LEVEL SECURITY;

CREATE POLICY "user can read own points"
  ON public.user_points FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Points are written server-side only (service role)
CREATE POLICY "service role can manage points"
  ON public.user_points FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Keep updated_at current
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER user_points_updated_at
  BEFORE UPDATE ON public.user_points
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Auto-create row when a new user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO public.user_points (user_id, points, tier)
  VALUES (NEW.id, 0, 'Bronze')
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
