import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ocean-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-white">
              <span className="text-xl">🌍</span> P3 Adventures
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Curated adventure travel experiences that take you beyond the ordinary.
              Explore the extraordinary with P3.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-white">Explore</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["/adventures", "Adventures"],
                ["/partners", "Partners & Resources"],
                ["/about", "About Us"],
                ["/blog", "Travel Blog"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-sand-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Ready to explore the extraordinary?</p>
              <Link
                href="/contact"
                className="inline-block mt-2 rounded-lg border border-sand-400 px-4 py-2 text-sand-300 text-sm font-medium hover:bg-sand-400 hover:text-white transition-all"
              >
                Plan Your Adventure →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-ocean-800 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {year} P3 Adventures. All rights reserved. | Carrie Lewis</p>
          <p className="mt-1 text-ocean-300 font-medium">Explore the Extraordinary</p>
        </div>
      </div>
    </footer>
  );
}
