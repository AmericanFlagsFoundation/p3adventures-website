import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Travel Partners & Resources",
  description:
    "P3 Adventures' recommended travel partners — cruise lines, resorts, travel insurance, gear, and booking tools to help you plan the perfect adventure.",
};

const partners = [
  {
    category: "🚢 Cruise Lines",
    description: "World-class cruise experiences across the Caribbean and beyond.",
    items: [
      {
        name: "Royal Caribbean",
        url: "https://www.royalcaribbean.com",
        desc: "Award-winning Caribbean cruises with destinations across the islands.",
      },
      {
        name: "Carnival Cruise Line",
        url: "https://www.carnival.com",
        desc: "Fun, affordable cruises to the Caribbean, Mexico, and Central America.",
      },
      {
        name: "Norwegian Cruise Line",
        url: "https://www.ncl.com",
        desc: "Freestyle cruising with flexible dining and itineraries across the Caribbean.",
      },
      {
        name: "Celebrity Cruises",
        url: "https://www.celebritycruises.com",
        desc: "Premium cruising experiences with award-winning cuisine and service.",
      },
      {
        name: "Holland America Line",
        url: "https://www.hollandamerica.com",
        desc: "Classic cruising with immersive destination experiences and cultural programming.",
      },
    ],
  },
  {
    category: "🏨 Hotels & Resorts",
    description: "Handpicked accommodations that put you in the heart of the experience.",
    items: [
      {
        name: "Sandals Resorts",
        url: "https://www.sandals.com",
        desc: "Luxury all-inclusive Caribbean resorts across Jamaica, Barbados, St. Lucia, and more.",
      },
      {
        name: "Beaches Resorts",
        url: "https://www.beaches.com",
        desc: "Family-friendly all-inclusive resorts in the Caribbean's most beautiful destinations.",
      },
      {
        name: "Marriott Bonvoy",
        url: "https://www.marriott.com",
        desc: "A global network of hotels and resorts with properties across Latin America and the Caribbean.",
      },
      {
        name: "Hyatt",
        url: "https://www.hyatt.com",
        desc: "Distinctive hotels and resorts with strong presence throughout Central and South America.",
      },
    ],
  },
  {
    category: "🛡️ Travel Insurance",
    description: "Travel with confidence — the right coverage changes everything.",
    items: [
      {
        name: "World Nomads",
        url: "https://www.worldnomads.com",
        desc: "Flexible travel insurance built for adventurous travelers. Covers 150+ activities.",
      },
      {
        name: "Allianz Travel Insurance",
        url: "https://www.allianztravelinsurance.com",
        desc: "Comprehensive coverage for trip cancellation, medical emergencies, and more.",
      },
      {
        name: "Travel Guard",
        url: "https://www.travelguard.com",
        desc: "Trusted travel protection with 24/7 emergency assistance worldwide.",
      },
    ],
  },
  {
    category: "✈️ Flights & Booking",
    description: "Find the best flights and deals to get you where you're going.",
    items: [
      {
        name: "Google Flights",
        url: "https://flights.google.com",
        desc: "The fastest way to compare flights, track prices, and find the best travel dates.",
      },
      {
        name: "Skyscanner",
        url: "https://www.skyscanner.com",
        desc: "Compare flights from hundreds of airlines and booking sites in one search.",
      },
      {
        name: "Kayak",
        url: "https://www.kayak.com",
        desc: "Search flights, hotels, and car rentals — with price alerts and flexible date tools.",
      },
      {
        name: "Scott's Cheap Flights",
        url: "https://app.scottscheapflights.com",
        desc: "Email alerts for mistake fares and deeply discounted flights to top destinations.",
      },
    ],
  },
  {
    category: "🎒 Gear & Packing",
    description: "The right gear makes every adventure better. These are our go-to picks.",
    items: [
      {
        name: "REI Co-op",
        url: "https://www.rei.com",
        desc: "Outdoor gear, apparel, and footwear — everything you need for adventure travel.",
      },
      {
        name: "Osprey Packs",
        url: "https://www.osprey.com",
        desc: "The best travel backpacks on the market. Built for the long haul.",
      },
      {
        name: "Eagle Creek",
        url: "https://www.eaglecreek.com",
        desc: "Packing cubes, travel organizers, and luggage built for adventurous travel.",
      },
      {
        name: "Away Luggage",
        url: "https://www.awaytravel.com",
        desc: "Thoughtfully designed luggage and travel accessories for modern travelers.",
      },
    ],
  },
  {
    category: "📸 Photography & Tech",
    description: "Capture every extraordinary moment.",
    items: [
      {
        name: "B&H Photo",
        url: "https://www.bhphotovideo.com",
        desc: "Cameras, lenses, and photography gear — the go-to for travel photographers.",
      },
      {
        name: "GoPro",
        url: "https://gopro.com",
        desc: "Action cameras built for adventure. Waterproof, rugged, and easy to use.",
      },
      {
        name: "Moment",
        url: "https://www.shopmoment.com",
        desc: "Premium mobile photography lenses and gear for smartphone travel photography.",
      },
    ],
  },
  {
    category: "🗺️ Tours & Experiences",
    description: "Curated experiences to complement your P3 Adventure.",
    items: [
      {
        name: "Viator",
        url: "https://www.viator.com",
        desc: "Book tours, activities, and experiences in destinations around the world.",
      },
      {
        name: "GetYourGuide",
        url: "https://www.getyourguide.com",
        desc: "Instantly bookable tours and activities with free cancellation options.",
      },
      {
        name: "Airbnb Experiences",
        url: "https://www.airbnb.com/experiences",
        desc: "Unique local experiences hosted by experts in their communities.",
      },
    ],
  },
];

export default function PartnersPage() {
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
          <h1 className="text-5xl font-extrabold sm:text-6xl mb-4">Travel Partners</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Resources, partners, and tools we trust to help you plan and book the perfect adventure.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you&apos;re looking to extend your trip with a cruise, find the right travel insurance,
            or gear up for the journey — these are the partners and resources we recommend.
            Some links may be affiliate links, which help support P3 Adventures at no extra cost to you.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="bg-sand-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {partners.map((group) => (
            <div key={group.category}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-ocean-800">{group.category}</h2>
                <p className="text-gray-600 mt-1">{group.description}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card flex flex-col gap-2 group hover:border-ocean-300 border border-transparent transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-ocean-800 group-hover:text-ocean-600 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-gray-400 group-hover:text-ocean-500 transition-colors text-sm">↗</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="bg-ocean-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold mb-4">Interested in Partnering With P3?</h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            We work with travel brands, tour operators, and gear companies that share our commitment
            to authentic, extraordinary travel experiences. Let&apos;s talk.
          </p>
          <Link href="/contact" className="btn-amber text-base px-10 py-4">
            Get In Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
