import type { Metadata } from "next";
import { readFile, readdir } from "fs/promises";
import { join } from "path";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BLOG_DIR = join(process.cwd(), "src/content/blog");

async function getPost(slug: string) {
  try {
    const raw = await readFile(join(BLOG_DIR, `${slug}.mdx`), "utf-8");
    const { content, data } = matter(raw);
    return { content, data };
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const files = await readdir(BLOG_DIR);
    return files
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => ({ slug: f.replace(".mdx", "") }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: (post.data.title as string) ?? "Blog | Sweet Desert",
    description: (post.data.excerpt as string) ?? undefined,
  };
}

function formatDate(date: string): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const { content, data } = post;

  return (
    <article className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          ← All posts
        </Link>

        <div className="mt-8">
          <p className="text-sm font-medium text-brand-coral">
            {formatDate(data.date as string)}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-dark-brown sm:text-4xl">
            {data.title as string}
          </h1>
          {data.author && (
            <p className="mt-3 text-sm text-gray-500">
              By {data.author as string}
            </p>
          )}
        </div>

        <div className="mt-10 h-0.5 bg-gray-100" />

        <div className="prose-custom mt-10 [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-brand-dark-brown [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-gray-700 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul_li]:text-gray-700">
          <MDXRemote source={content} />
        </div>

        <div className="mt-16 h-0.5 bg-gray-100" />
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex h-12 items-center justify-center rounded-full border-2 border-gray-200 px-6 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
