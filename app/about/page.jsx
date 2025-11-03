import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Users, Award, Target } from "lucide-react";

export default function About() {
  return (
    <>
      <Navigation />

      <main>
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
              About AK Legal Associates
            </h1>
            <p className="text-lg text-primary-foreground/90">
              A team of dedicated legal professionals committed to excellence
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  About Us
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  AK Legal Associates is Law Firm based on providing swift
                  remedies and solutions to it's clients acting as panacea for
                  the Legal Injuries. At AK Legal Associates we believe in
                  action and protecting your legal rights whether the same are
                  infringed or there is an apprehension. We safeguard the rights
                  of your clients on priority basis and are providing exhaustive
                  legal services including but not limited to Litigation, Civil
                  Matters, Criminal Cases, Family Issues, Constitutional
                  Matters, Corporate Governance and Advisories, Protection of
                  Intellectual Property (Trademark, Copyrights, Patents, Trade
                  secrets), Formation of Contracts etc.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  The goal of our Law Firm is to support each and every client
                  beyond the legal issues and provide remedies which can get
                  results, we are result driven and strictly focuses on remedial
                  perspective apart from legal services.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  Our Advisory services are well informed and provide legally
                  sound and long term legal advice to our clients to protect
                  them from any prospective legal issues, we prefer compliances
                  and prevent our clients. Get into contact for appointments,
                  meetings and consultations to get the best legal remedy
                  available for your legal matter/ issue.
                </p>
              </div>
              <div className="bg-linear-to-br from-primary to-primary/80 rounded-lg h-64 flex items-center justify-center text-primary-foreground">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-secondary">
                    3+
                  </div>
                  <p className="text-lg">Years of Experience</p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  description:
                    "We maintain the highest standards of legal practice and client service in everything we do.",
                },
                {
                  icon: Users,
                  title: "Integrity",
                  description:
                    "Honesty and ethical conduct guide all our client relationships and legal practice.",
                },
                {
                  icon: Target,
                  title: "Client Focus",
                  description:
                    "Your success and satisfaction are our primary objectives in every engagement.",
                },
              ].map((value, i) => {
                const Icon = value.icon;
                return (
                  <div key={i} className="text-center">
                    <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Team Highlights */}
            <div className="bg-muted rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold mb-6 text-primary">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Managing Partner with 30+ years of corporate law experience",
                  "Litigation specialists recognized in state bar associations",
                  "Contract negotiation experts with Fortune 500 experience",
                  "Intellectual property attorneys with USPTO credentials",
                ].map((member, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-secondary text-accent-foreground flex items-center justify-center font-bold text-sm">
                      ✓
                    </div>
                    <p className="text-foreground/80">{member}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-12 px-4 mt-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-secondary">
              Ready to Work With Us?
            </h2>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Contact us today to discuss how our team can serve your legal
              needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-secondary text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
