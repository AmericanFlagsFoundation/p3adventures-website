import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Ready to explore the extraordinary? Get in touch with P3 Adventures and start planning your trip.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-ocean-900/65" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-5xl font-extrabold sm:text-6xl mb-4">Let&apos;s Plan Your Trip</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Tell us where you want to go. We&apos;ll take it from there.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-sand-50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="card">
            <h2 className="text-2xl font-bold text-ocean-800 mb-2">Start the Conversation</h2>
            <p className="text-gray-600 mb-8">
              Whether you&apos;re ready to book or just starting to dream — we want to hear from you.
            </p>

            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input type="text" className="input-field" placeholder="Jamie" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input type="text" className="input-field" placeholder="Lewis" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input type="email" className="input-field" placeholder="you@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Where do you want to go?
                </label>
                <select className="input-field">
                  <option value="">Select a destination...</option>
                  <option>Cuba — Living History</option>
                  <option>Costa Rica — Wild &amp; Deep</option>
                  <option>Belize — Reef &amp; Rainforest</option>
                  <option>Colombia — Coffee &amp; Peaks</option>
                  <option>Photography: Caribbean Light</option>
                  <option>Mexico — Oaxaca to Coast</option>
                  <option>Custom / I&apos;m not sure yet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  When are you thinking?
                </label>
                <select className="input-field">
                  <option value="">Select a timeframe...</option>
                  <option>Next 3 months</option>
                  <option>3–6 months out</option>
                  <option>6–12 months out</option>
                  <option>Just exploring options</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us more
                </label>
                <textarea
                  rows={5}
                  className="input-field"
                  placeholder="Group size, special interests, budget range, questions — anything you want us to know..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-4 text-base"
              >
                Send My Message →
              </button>

              <p className="text-xs text-gray-400 text-center">
                We typically respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
