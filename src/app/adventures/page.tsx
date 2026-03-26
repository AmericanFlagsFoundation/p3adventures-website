import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adventures",
  description:
    "Explore P3 Adventures' curated travel experiences — from Caribbean cultural immersions to jungle expeditions and photography tours.",
};

const featured = [
  {
    emoji: "🏛️",
    title: "Cuba: Living History",
    subtitle: "Havana · Trinidad · Viñales",
    duration: "8 Days",
    groupSize: "Up to 10",
    description:
      "Step into one of the most visually arresting, culturally rich places on earth. Classic cars, colonial architecture, world-class music, and a people whose warmth is impossible to overstate. This is Cuba before it changes.",
    highlights: ["Old Havana walking tour", "Trinidad's colonial center", "Viñales Valley tobacco farms", "Casa particular stays", "Live Afro-Cuban music nights"],
    tag: "Culture",
    color: "ocean",
  },
  {
    emoji: "🌿",
    title: "Costa Rica: Wild & Deep",
    subtitle: "Manuel Antonio · Arenal · Monteverde",
    duration: "10 Days",
    groupSize: "Up to 12",
    description:
      "Rainforests that hum with life, volcanoes that glow at dusk, and coastline that belongs in a dream. Costa Rica rewards travelers who go slow — and we know exactly how to do that.",
    highlights: ["Arenal volcano hike at dawn", "Monteverde cloud forest canopy walk", "Manuel Antonio wildlife sanctuary", "Night jungle walks", "Howler monkey mornings"],
    tag: "Nature",
    color: "jungle",
  },
  {
    emoji: "🤿",
    title: "Belize: Reef & Rainforest",
    subtitle: "Belize City · Caye Caulker · Tikal",
    duration: "9 Days",
    groupSize: "Up to 10",
    description:
      "The world's second-largest barrier reef. Mayan ruins rising from jungle. And the most unhurried island in the Caribbean. Belize is small. The experience is anything but.",
    highlights: ["Great Blue Hole snorkel", "Tikal sunrise ruins tour", "Caye Caulker go-slow culture", "Mayan cave tubing", "Belize Barrier Reef dive"],
    tag: "Ocean",
    color: "ocean",
  },
  {
    emoji: "🏔️",
    title: "Colombia: Coffee & Peaks",
    subtitle: "Cartagena · Medellín · Coffee Region",
    duration: "11 Days",
    groupSize: "Up to 12",
    description:
      "A country that transformed itself in a generation. Cartagena's walled old city. Medellín's improbable reinvention. And the Eje Cafetero — rolling hills, colorful jeeps, and the best coffee on the planet.",
    highlights: ["Cartagena old city wander", "Medellín cable car + urban transformation", "Coffee finca harvest experience", "Cocora Valley wax palm hike", "Bogotá food and art scene"],
    tag: "Culture & Hiking",
    color: "sand",
  },
  {
    emoji: "📸",
    title: "Photography: Caribbean Light",
    subtitle: "Cuba · Trinidad · Havana",
    duration: "7 Days",
    groupSize: "Up to 8",
    description:
      "Designed specifically for photographers — amateur to advanced. The streets of Havana at golden hour. Fishermen at dawn in Trinidad. Color, light, and life in every frame. Led by a working travel photographer.",
    highlights: ["Golden hour Havana shoots", "Trinidad street photography", "Portrait sessions with permission", "Post-processing workshops", "Photo storytelling critique sessions"],
    tag: "Photography",
    color: "sand",
  },
  {
    emoji: "🍽️",
    title: "Mexico: Oaxaca to Coast",
    subtitle: "Oaxaca · Puerto Escondido · Monte Albán",
    duration: "8 Days",
    groupSize: "Up to 10",
    description:
      "Oaxaca is the food capital of Mexico, and that's not a small claim. Mole negro. Tlayudas. Mezcal in its homeland. Paired with Zapotec ruins, Pacific waves, and a culture that refuses to be rushed.",
    highlights: ["Oaxacan cooking class with local family", "Mezcal distillery deep-dive", "Monte Albán pre-dawn ruins walk", "Puerto Escondido surf culture", "Mercado de Benito Juárez food tour"],
    tag: "Food & Culture",
    color: "jungle",
  },
];

export default function AdventuresPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-ocean-900/65" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-5xl font-extrabold sm:text-6xl mb-4">Our Adventures</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Each trip is designed with one goal: to make you feel like you actually
            know the place when you leave.
          </p>
        </div>
      </section>

      {/* Adventures Grid */}
      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {featured.map((adv) => (
              <div key={adv.title} className="card overflow-hidden">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{adv.emoji}</span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-sand-500">
                      {adv.tag}
                    </span>
                    <h2 className="text-2xl font-bold text-ocean-800 mt-1">
                      {adv.title}
                    </h2>
                    <p className="text-gray-500 text-sm">{adv.subtitle}</p>
                  </div>
                </div>

                <div className="flex gap-6 mb-4 text-sm text-gray-500">
                  <span>⏱️ {adv.duration}</span>
                  <span>👥 {adv.groupSize}</span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">{adv.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-ocean-700 uppercase tracking-wider mb-2">
                    Highlights
                  </h4>
                  <ul className="space-y-1">
                    {adv.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-jungle-500">✓</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-ocean-700 px-5 py-2 text-sm font-semibold text-white hover:bg-ocean-800 transition-colors"
                >
                  Inquire About This Trip →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Trip CTA */}
      <section className="bg-ocean-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t See What You&apos;re Looking For?</h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            We design custom itineraries too. Tell us where you want to go, how long you have,
            and what kind of experience you&apos;re after — we&apos;ll handle the rest.
          </p>
          <Link href="/contact" className="btn-amber text-base px-10 py-4">
            Build a Custom Trip
          </Link>
        </div>
      </section>
    </>
  );
}
