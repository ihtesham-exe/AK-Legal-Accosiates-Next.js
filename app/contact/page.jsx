"use client";

import React from "react";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Navigation />

      <main>
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Get in touch with our legal team for a consultation
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "mahsanmasoodkhan27@gmail.com",
                  link: "mailto:mahsanmasoodkhan27@gmail.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+92 3159833484",
                  link: "+92 3159833484",
                },
                {
                  icon: MapPin,
                  title: "Address",
                  value: "Peshawar High Court building, Saddar road, Peshawar",
                  link: "https://www.google.com/maps/place/Peshawar+High+Court/@34.0079565,71.5674003,15.45z/data=!4m6!3m5!1s0x38d917d11cf80bf5:0xdc8746af227cc598!8m2!3d34.0127044!4d71.5651986!16s%2Fm%2F03cfn7t?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target={item.title === "Address" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="bg-card rounded-lg p-8 shadow-md border border-border hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-8 h-8 text-accent mb-4" />
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.value}</p>
                  </a>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-semibold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Tell us about your legal matter..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary cursor-pointer py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    Send Message
                  </button>

                  {submitted && (
                    <div className="p-4 bg-green-100 text-green-800 rounded-lg text-center font-semibold">
                      Thank you! We'll be in touch shortly.
                    </div>
                  )}
                </form>
              </div>

              <div className="bg-muted rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  Office Hours
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="font-semibold">Monday - Friday</span>
                    <span className="text-foreground/70">
                      8:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Saturday</span>
                    <span className="text-foreground/70">
                      9:00 AM - 3:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-foreground/70">Closed</span>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="font-bold mb-4">Emergency Matters</h3>
                  <p className="text-foreground/70 mb-4">
                    For urgent legal matters outside of business hours, please
                    call our emergency line:
                  </p>
                  <p className="text-lg font-bold text-accent">
                    (+92) 3159833484
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
