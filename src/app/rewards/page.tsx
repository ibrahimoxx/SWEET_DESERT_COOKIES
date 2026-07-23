import type { Metadata } from "next";
import { rewardsTiers } from "@/data/rewards";
import { RewardsDashboard } from "@/components/RewardsDashboard";

export const metadata: Metadata = {
  title: "Rewards | Sweet Desert",
  description:
    "Earn Sweet Desert Sweets on every purchase and unlock exclusive rewards.",
};

async function fetchUserData(): Promise<{
  userPoints: number;
  userTier: string;
  isAuthenticated: boolean;
}> {
  const defaults = { userPoints: 0, userTier: "Bronze", isAuthenticated: false };

  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return defaults;
  }

  try {
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return defaults;

    const { data } = await supabase
      .from("user_points")
      .select("points, tier")
      .eq("user_id", user.id)
      .single();

    return {
      userPoints: (data?.points as number) ?? 0,
      userTier: (data?.tier as string) ?? "Bronze",
      isAuthenticated: true,
    };
  } catch {
    return defaults;
  }
}

export default async function RewardsPage() {
  const { userPoints, userTier, isAuthenticated } = await fetchUserData();

  return (
    <RewardsDashboard
      tiers={rewardsTiers}
      userPoints={userPoints}
      userTier={userTier}
      isAuthenticated={isAuthenticated}
    />
  );
}
