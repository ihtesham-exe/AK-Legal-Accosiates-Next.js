import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const servicesData = {
  litigation: {
    title: "Litigation",
    description:
      "Representation and advocacy in civil and criminal litigation.",
    overview:
      "Our litigation practice offers comprehensive legal representation in a wide range of civil and criminal matters. We are committed to achieving the best possible outcomes for our clients through strategic advocacy and thorough preparation.",
    services: [
      "Civil litigation",
      "Criminal defense",
      "Family",
      "Services",
      "NAB/FIA",
      "Banking",
      "Narcotics",
    ],
  },
  arbitration: {
    title: "Arbitration",
    description:
      "Expert resolution of disputes outside the courts through arbitration.",
    overview:
      "Our arbitration practice provides clients with efficient and effective dispute resolution services. We represent clients in domestic and international arbitration proceedings, offering strategic guidance throughout the entire process.",
    services: [
      "Commercial arbitration",
      "Investment arbitration",
      "Construction arbitration",
      "Arbitration agreement drafting",
      "Arbitrator selection and appointment",
      "Award enforcement",
    ],
  },
  "banking-finance": {
    title: "Banking & Finance",
    description:
      "Comprehensive legal support for banking and financial matters.",
    overview:
      "We provide comprehensive legal services to banks, financial institutions, and borrowers. Our team has extensive experience in all aspects of banking and finance law.",
    services: [
      "Loan documentation",
      "Regulatory compliance",
      "Project finance",
      "Syndicated lending",
      "Debt restructuring",
      "Islamic finance",
    ],
  },
  "capital-markets": {
    title: "Capital Markets",
    description:
      "Legal guidance for capital market transactions and regulations.",
    overview:
      "Our capital markets practice assists clients in navigating complex securities transactions and regulatory requirements. We provide strategic advice on public offerings, private placements, and compliance matters.",
    services: [
      "IPO advisory",
      "Securities offerings",
      "Regulatory compliance",
      "Corporate governance",
      "Disclosure requirements",
      "Stock exchange listings",
    ],
  },
  commercial: {
    title: "Commercial",
    description:
      "Business-focused legal solutions for commercial transactions.",
    overview:
      "We provide practical legal solutions for all types of commercial transactions. Our team works closely with clients to structure deals that achieve their business objectives while managing legal risks.",
    services: [
      "Commercial contracts",
      "Distribution agreements",
      "Agency agreements",
      "Joint ventures",
      "Franchising",
      "Commercial dispute resolution",
    ],
  },
  "corporate-mna": {
    title: "Corporate and M&A",
    description: "Corporate law services including mergers and acquisitions.",
    overview:
      "Our corporate and M&A practice provides comprehensive legal support for businesses at every stage. From formation to exit, we guide clients through complex corporate transactions and governance matters.",
    services: [
      "Mergers and acquisitions",
      "Corporate restructuring",
      "Due diligence",
      "Shareholder agreements",
      "Corporate governance",
      "Business formation",
    ],
  },
  "data-protection": {
    title: "Data Protection",
    description:
      "Safeguarding your data and ensuring compliance with protection laws.",
    overview:
      "We help organizations navigate the complex landscape of data protection and privacy laws. Our team provides practical guidance on compliance, risk management, and incident response.",
    services: [
      "Privacy compliance",
      "Data protection policies",
      "GDPR compliance",
      "Data breach response",
      "Privacy impact assessments",
      "Cross-border data transfers",
    ],
  },
  "dispute-resolution": {
    title: "Dispute Resolution",
    description:
      "Resolving disputes efficiently through various legal mechanisms.",
    overview:
      "Our dispute resolution practice offers clients a full range of services to resolve commercial disputes efficiently and cost-effectively. We handle litigation, mediation, and alternative dispute resolution.",
    services: [
      "Commercial litigation",
      "Mediation",
      "Negotiation",
      "Civil disputes",
      "Contract disputes",
      "Pre-litigation counseling",
    ],
  },
  "employment-immigration": {
    title: "Employment & Immigration",
    description: "Legal services for employment and immigration matters.",
    overview:
      "We provide comprehensive employment and immigration law services to both employers and employees. Our team stays current with evolving regulations to provide practical, effective counsel.",
    services: [
      "Employment contracts",
      "Work permits and visas",
      "Labor law compliance",
      "Immigration applications",
      "Employee relations",
      "Workforce immigration planning",
    ],
  },
  "engineering-construction": {
    title: "Engineering & Construction",
    description: "Legal expertise for engineering and construction projects.",
    overview:
      "Our construction law practice serves contractors, developers, owners, and other industry participants. We provide legal support throughout all phases of construction projects.",
    services: [
      "Construction contracts",
      "Project documentation",
      "Contractor disputes",
      "Delay claims",
      "Defect claims",
      "Construction arbitration",
    ],
  },
  "intellectual-property": {
    title: "Intellectual Property",
    description: "Protection and enforcement of intellectual property rights.",
    overview:
      "We help clients protect and maximize the value of their intellectual property assets. Our team provides strategic advice on IP registration, licensing, and enforcement.",
    services: [
      "Trademark registration",
      "Copyright protection",
      "Patent applications",
      "IP licensing",
      "Trade secret protection",
      "IP litigation",
    ],
  },
  "real-estate": {
    title: "Real Estate",
    description:
      "Legal support for real estate transactions and property matters.",
    overview:
      "Our real estate practice provides comprehensive legal services for property transactions and development projects. We represent buyers, sellers, developers, and investors.",
    services: [
      "Property transactions",
      "Real estate development",
      "Title due diligence",
      "Lease agreements",
      "Property disputes",
      "Zoning and land use",
    ],
  },
  "regulatory-government-advisory": {
    title: "Regulatory & Government Advisory",
    description:
      "Advisory services for regulatory and government-related issues.",
    overview:
      "We assist clients in navigating complex regulatory environments and government interactions. Our team provides strategic counsel on compliance, licensing, and regulatory matters.",
    services: [
      "Regulatory compliance",
      "Licensing and permits",
      "Government relations",
      "Regulatory investigations",
      "Policy advocacy",
      "Administrative proceedings",
    ],
  },
  tax: {
    title: "Tax",
    description:
      "Tax law advice and compliance for individuals and businesses.",
    overview:
      "Our tax practice provides comprehensive tax planning and compliance services. We help clients minimize tax liabilities while ensuring full compliance with tax laws and regulations.",
    services: [
      "Tax planning",
      "Corporate tax",
      "International tax",
      "Tax compliance",
      "Tax disputes",
      "Transfer pricing",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navigation />

      <main>
        {/* Page Header */}
        <section
          className="bg-primary text-primary-foreground py-12 px-4"
          style={{
            background:
              "linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #3b82f6 50%, #1e40af 905%, #1e3a8a 100%)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground mb-4 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
              {service.title}
            </h1>
            <p className="text-lg text-primary-foreground/90">
              {service.description}
            </p>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-primary">Overview</h2>
              <p className="text-foreground/80 text-lg leading-relaxed">
                {service.overview}
              </p>
            </div>

            {/* Services List */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Our Services Include
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.services.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-secondary text-accent-foreground flex items-center justify-center font-bold text-sm mt-0.5">
                      ✓
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-accent/10 rounded-lg p-8 border border-border text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Need Assistance with {service.title}?
              </h3>
              <p className="text-foreground/70 mb-6">
                Contact us today to discuss how we can help with your legal
                needs.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-secondary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
