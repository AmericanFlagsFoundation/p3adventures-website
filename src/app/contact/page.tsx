"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    destination: "",
    timeframe: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ firstName: "", lastName: "", email: "", destination: "", timeframe: "", message: "" });
      } else {
        const data = await res.json();
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

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

            {status === "success" ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✈️</div>
                <h2 className="text-2xl font-bold text-ocean-800 mb-3">Message Sent!</h2>
                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  Thanks for reaching out. Carrie will get back to you within 24 hours to start planning your adventure.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-ocean-800 mb-2">Start the Conversation</h2>
                <p className="text-gray-600 mb-8">
                  Whether you&apos;re ready to book or just starting to dream — we want to hear from you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Carrie"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Lewis"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Where do you want to go?
                    </label>
                    <select
                      name="destination"
                      value={form.destination}
                      onChange={handleChange}
                      className="input-field"
                    >
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
                    <select
                      name="timeframe"
                      value={form.timeframe}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select a timeframe...</option>
                      <option>Next 3 months</option>
                      <option>3–6 months out</option>
                      <option>6–12 months out</option>
                      <option>Just exploring options</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tell us more <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input-field"
                      placeholder="Group size, special interests, budget range, questions — anything you want us to know..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send My Message →"}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    We typically respond within 24 hours.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
