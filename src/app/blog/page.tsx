import type { Metadata } from "next";
import { readdir, readFile } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Sweet Desert",
  description: "News, stories, and dessert inspiration from Sweet Desert.",
};

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
}

async function getPosts(): Promise<PostMeta[]> {
  const dir = join(process.cwd(), "src/content/blog");
  try {
    const files = await readdir(dir);
    const posts = await Promise.all(
      files
        .filter((f) => f.endsWith(".mdx"))
        .map(async (f) => {
          const raw = await readFile(join(dir, f), "utf-8");
          const { data } = matter(raw);
          return {
            slug: f.replace(".mdx", ""),
            title: (data.title as string) ?? "Untitled",
            date: (data.date as string) ?? "",
            excerpt: (data.excerpt as string) ?? "",
            author: (data.author as string) ?? "Sweet Desert Team",
          };
        })
    );
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch {
    return [];
  }
}

function formatDate(date: string): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="bg-brand-cream min-h-[60vh] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark-brown sm:text-5xl">
            Blog
          </h1>
          <p className="mt-6 text-lg text-brand-brown">
            Stories, recipes, and news from the Sweet Desert team.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="mt-16 text-center text-gray-500">
            Posts coming soon. Check back later.
          </p>
        ) : (
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="flex h-40 items-center justify-center bg-brand-pink text-5xl">
                  🍪
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium text-gray-400">
                    {formatDate(post.date)}
                  </p>
                  <h2 className="mt-2 text-lg font-bold text-brand-dark-brown group-hover:text-brand-coral transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-gray-400">{post.author}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
