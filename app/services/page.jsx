import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Arbitration",
      slug: "arbitration",
      description:
        "Expert resolution of disputes outside the courts through arbitration.",
      items: [],
    },
    {
      title: "Banking & Finance",
      slug: "banking-finance",
      description:
        "Comprehensive legal support for banking and financial matters.",
      items: [],
    },
    {
      title: "Capital Markets",
      slug: "capital-markets",
      description:
        "Legal guidance for capital market transactions and regulations.",
      items: [],
    },
    {
      title: "Commercial",
      slug: "commercial",
      description:
        "Business-focused legal solutions for commercial transactions.",
      items: [],
    },
    {
      title: "Corporate and M&A",
      slug: "corporate-mna",
      description: "Corporate law services including mergers and acquisitions.",
      items: [],
    },
    {
      title: "Data Protection",
      slug: "data-protection",
      description:
        "Safeguarding your data and ensuring compliance with protection laws.",
      items: [],
    },
    {
      title: "Dispute Resolution",
      slug: "dispute-resolution",
      description:
        "Resolving disputes efficiently through various legal mechanisms.",
      items: [],
    },
    {
      title: "Employment & Immigration",
      slug: "employment-immigration",
      description: "Legal services for employment and immigration matters.",
      items: [],
    },
    {
      title: "Engineering & Construction",
      slug: "engineering-construction",
      description: "Legal expertise for engineering and construction projects.",
      items: [],
    },
    {
      title: "Intellectual Property",
      slug: "intellectual-property",
      description:
        "Protection and enforcement of intellectual property rights.",
      items: [],
    },
    {
      title: "Real Estate",
      slug: "real-estate",
      description:
        "Legal support for real estate transactions and property matters.",
      items: [],
    },
    {
      title: "Regulatory & Government Advisory",
      slug: "regulatory-government-advisory",
      description:
        "Advisory services for regulatory and government-related issues.",
      items: [],
    },
    {
      title: "Tax",
      slug: "tax",
      description:
        "Tax law advice and compliance for individuals and businesses.",
      items: [],
    },
  ];

  return (
    <>
      <Navigation />

      <main>
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
              Our Services
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Comprehensive legal solutions tailored to your unique needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, i) => (
                <Link
                  key={i}
                  href={`/services/${service.slug}`}
                  className="bg-card rounded-lg p-8 shadow-md border border-border hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
                >
                  <h2 className="text-2xl font-bold text-primary mb-3">
                    {service.title}
                  </h2>
                  <p className="text-foreground/70 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent/10 py-12 px-4 border-t border-b border-border">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Need Legal Assistance?
            </h2>
            <p className="text-foreground/70 mb-6">
              Contact us to discuss how we can help with your legal matters.
            </p>
            <a
              href="/contact"
              className="inline-block bg-secondary  px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Schedule a Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
