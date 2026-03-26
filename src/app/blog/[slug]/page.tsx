import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamic = "force-dynamic";

// Simple markdown renderer (paragraphs, headers, bold, italic, links, lists, hr)
function renderMarkdown(content: string): string {
  return content
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-ocean-800 mt-8 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-ocean-800 mt-10 mb-4">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-ocean-800 mt-10 mb-4">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-ocean-700 font-medium hover:underline">$1</a>')
    .replace(/^---$/gm, '<hr class="my-8 border-gray-200" />')
    .replace(/^- (.+)$/gm, '<li class="flex gap-2 items-start"><span class="text-jungle-500 mt-1">✓</span><span>$1</span></li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="space-y-2 my-4">$&</ul>')
    .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed text-gray-700">')
    .replace(/^(?!<)(.+)$/gm, '<p class="mb-4 leading-relaxed text-gray-700">$1</p>');
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-ocean-900/70" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          {post.category && (
            <span className="text-xs font-semibold uppercase tracking-widest text-sand-300 mb-3 block">
              {post.category}
            </span>
          )}
          <h1 className="text-3xl font-extrabold sm:text-4xl mb-4">{post.title}</h1>
          <p className="text-gray-300 text-sm">{post.date}</p>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="text-sm font-semibold text-ocean-700 hover:underline"
          >
            ← Back to All Posts
          </Link>
        </div>
      </article>
    </>
  );
}
