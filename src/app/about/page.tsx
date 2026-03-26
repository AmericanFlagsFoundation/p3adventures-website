import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind P3 Adventures — who we are, why we do this, and what makes us different.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-32 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-ocean-900/70" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-5xl font-extrabold sm:text-6xl mb-4">About P3</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We started with a simple belief: that the world is endlessly extraordinary, and most of us are only seeing the surface.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Our Story</h2>
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p>
              P3 Adventures was born from a single frustrating realization: most travel packages
              show you a place without ever really letting you know it. You see the landmarks. You
              eat at the tourist restaurants. You take the photos. And then you come home wondering
              why it didn&apos;t feel the way you expected.
            </p>
            <p>
              We built P3 to do something different. Every experience we design is built around
              one question: <em>what would it feel like to truly belong here, even for a week?</em>
            </p>
            <p>
              That means small groups — never more than 12. It means local guides who grew up in
              the places we visit, not just studied them. It means eating where locals eat, staying
              where the story is, and leaving room in the itinerary for the unexpected moment that
              ends up being the whole trip.
            </p>
            <p>
              The &ldquo;P3&rdquo; in our name stands for the three things we believe every great adventure
              requires: <strong>Passion</strong>, <strong>Purpose</strong>, and{" "}
              <strong>People</strong>. Passion to seek what&apos;s real. Purpose to go deeper than the
              surface. And people — both the travelers we take and the communities we visit — who
              make the whole thing matter.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="section-heading">What Drives Us</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["🌍", "Go Deeper", "Surface-level travel misses everything that matters. We design for depth — in culture, in connection, in experience."],
              ["🤝", "People First", "The communities we visit are not backdrops. They're the whole point. Responsible, respectful, relationship-driven travel."],
              ["🗺️", "Small by Design", "Small groups aren't a limitation — they're an advantage. Fewer people means better access, better guides, better experiences."],
              ["⚡", "Stay Curious", "The best travelers are relentlessly curious. We design experiences that reward that instinct at every turn."],
              ["🌱", "Travel Responsibly", "We choose local partners, minimize environmental impact, and leave every place better than we found it."],
              ["📸", "Make Memories", "Not just photos for Instagram — actual memories. The kind you're still telling stories about ten years later."],
            ].map(([emoji, title, desc]) => (
              <div key={title} className="card text-center">
                <span className="text-3xl mb-3 block">{emoji}</span>
                <h3 className="font-bold text-ocean-800 text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ocean-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore the Extraordinary?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Tell us where you want to go — or let us surprise you.
          </p>
          <Link href="/contact" className="btn-amber text-base px-10 py-4">
            Start Planning Your Adventure
          </Link>
        </div>
      </section>
    </>
  );
}
