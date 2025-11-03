import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Shield, Scale, Briefcase } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section
          className="relative text-primary-foreground py-20 px-4"
          style={{
            backgroundImage: "url(/hero-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-primary/80 to-primary/90 opacity-50 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto text-center">
            <Image
              src="/logo-ak-firm.png"
              alt="Hero Image"
              className="mx-auto mb-8"
              width={600}
              height={400}
            />
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              AK Legal Associates (LAWYERS. CONSULTANTS. ADVISORS) is a top tier
              law firm based in Peshawar, providing its clients the best legal
              remedies for all the legal issues. We deal our clients in the most
              professional way so as to advance not only legal solutions but
              also to resolve the matter so as to remedify the wrong completely.
              Our Firm deals in numerous services ranging from Litigation,
              Contractual matters, Intellectual Property, Alternate Dispute
              Resolution, Advisory Services, Consultation and many more. Contact
              us to resolve your legal issue in a swift & expeditious manner.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-transform"
            >
              Schedule Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Our Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Scale,
                  title: "Litigation",
                  description:
                    "Strategic representation in civil and commercial disputes with proven courtroom success.",
                },
                {
                  icon: Briefcase,
                  title: "Corporate Law",
                  description:
                    "Comprehensive business structuring, mergers, acquisitions, and corporate governance services.",
                },
                {
                  icon: Shield,
                  title: "Contract Law",
                  description:
                    "Expert drafting, negotiation, and review of complex commercial agreements.",
                },
              ].map((service, i) => {
                const Icon = service.icon;
                return (
                  <div
                    key={i}
                    className="bg-card rounded-lg p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-border"
                  >
                    <Icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                View All Services
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-muted py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Why Choose AK Legal Associates
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Decades of combined legal expertise and industry knowledge",
                "Personalized approach tailored to your specific needs",
                "Transparent communication and honest counsel",
                "Competitive fees with flexible payment options",
              ].map((reason, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-secondary text-accent-foreground flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <p className="text-foreground/80">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-secondary">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Contact us today for a consultation with one of our experienced
              attorneys.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
