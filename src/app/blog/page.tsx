import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Travel Blog",
  description:
    "Stories, tips, and inspiration from the road. The P3 Adventures travel blog.",
};

export const dynamic = "force-dynamic";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 50%",
        }}
      >
        <div className="absolute inset-0 bg-ocean-900/65" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-5xl font-extrabold sm:text-6xl mb-4">Travel Blog</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Stories from the road. Tips for the trip. Inspiration for the journey.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-5xl mb-4 block">✈️</span>
            <p className="text-lg text-gray-500">
              Adventures are being planned. Stories are coming soon.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="card border-l-4 border-ocean-500">
                {post.category && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-sand-500 mb-2 block">
                    {post.category}
                  </span>
                )}
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="mb-2 text-2xl font-bold text-ocean-800 hover:text-ocean-600 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="mb-3 text-sm text-gray-400">{post.date}</p>
                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-ocean-700 hover:underline"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
