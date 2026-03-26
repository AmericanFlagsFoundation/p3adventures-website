import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "P3 Adventures | Explore the Extraordinary",
};

export const dynamic = "force-dynamic";

const adventures = [
  {
    emoji: "🏛️",
    title: "Cultural Immersion",
    description:
      "Step inside living history. Colonial cities, ancient ruins, vibrant local markets — we take you where stories are still being written.",
    tag: "Culture",
  },
  {
    emoji: "🌿",
    title: "Jungle & Nature",
    description:
      "Canopy walks, river expeditions, wildlife encounters. The natural world doesn't get more extraordinary than this.",
    tag: "Nature",
  },
  {
    emoji: "🤿",
    title: "Ocean & Coast",
    description:
      "Turquoise water, coral reefs, hidden coves. The Caribbean coast holds secrets that most travelers never find.",
    tag: "Ocean",
  },
  {
    emoji: "🏔️",
    title: "Mountain Expeditions",
    description:
      "High-altitude hikes, volcanic landscapes, cloud forests. For those who believe the best views require a climb.",
    tag: "Hiking",
  },
  {
    emoji: "🍽️",
    title: "Food & Local Life",
    description:
      "Eat where locals eat. Learn what they cook. Understand a place through the food that defines it.",
    tag: "Food",
  },
  {
    emoji: "📸",
    title: "Photography Tours",
    description:
      "Golden hour in a UNESCO village. Street scenes that tell a thousand stories. We find the frame-worthy moments.",
    tag: "Photography",
  },
];

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sand-300">
              Adventure Awaits
            </p>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
              Explore the{" "}
              <span className="text-sand-300">Extraordinary</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg text-gray-200 sm:text-xl leading-relaxed">
              We don&apos;t do ordinary. P3 Adventures designs curated travel
              experiences that go deeper, feel more real, and leave you
              fundamentally changed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/adventures" className="btn-amber text-base px-8 py-3">
                See Our Adventures
              </Link>
              <Link
                href="/contact"
                className="btn-secondary text-base px-8 py-3"
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why P3 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="section-heading">Why P3 Adventures?</h2>
          <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
            Most travel takes you to a place. P3 Adventures takes you{" "}
            <em>into</em> it. We design small-group experiences that prioritize
            depth over distance — genuine local connections, off-the-beaten-path
            discoveries, and moments you couldn&apos;t plan if you tried. This is what
            extraordinary feels like.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              ["✈️", "Small Groups", "Never more than 12 travelers — intimate by design"],
              ["🗺️", "Expert-Led", "Local guides who know the hidden layers of every destination"],
              ["❤️", "Authentic", "Real food, real people, real experiences — no tourist traps"],
            ].map(([emoji, title, desc]) => (
              <div key={title} className="text-center p-6">
                <div className="text-4xl mb-3">{emoji}</div>
                <h3 className="font-bold text-ocean-800 text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adventures Grid */}
      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="section-heading">What We Explore</h2>
            <p className="section-subheading mx-auto text-center">
              From colonial cities to coral reefs — every adventure is designed
              to go deeper than the guidebook.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {adventures.map((adv) => (
              <div key={adv.title} className="card group">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{adv.emoji}</span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-sand-500 mb-1 block">
                      {adv.tag}
                    </span>
                    <h3 className="text-lg font-bold text-ocean-800 mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/adventures" className="btn-primary">
              View All Adventures →
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Quote / CTA Banner */}
      <section
        className="relative py-24 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
        }}
      >
        <div className="absolute inset-0 bg-ocean-900/75" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sand-300 text-sm font-semibold uppercase tracking-widest mb-4">
            The P3 Promise
          </p>
          <h2 className="text-4xl font-extrabold sm:text-5xl mb-6">
            &ldquo;The world is extraordinary.<br />
            <span className="text-sand-300">Most people just never see it.&rdquo;</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We&apos;re here to change that. One trip, one story, one extraordinary moment at a time.
          </p>
          <Link href="/contact" className="btn-amber text-base px-10 py-4">
            Start Planning Today
          </Link>
        </div>
      </section>

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="section-heading mb-1">From the Blog</h2>
                <p className="text-gray-600">Stories, tips, and inspiration from the road.</p>
              </div>
              <Link
                href="/blog"
                className="text-sm font-semibold text-ocean-700 hover:underline"
              >
                All Posts →
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <article key={post.slug} className="card">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold text-ocean-800 hover:text-ocean-600 transition-colors mb-2">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-400 mb-3">{post.date}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-ocean-700 hover:underline"
                  >
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
