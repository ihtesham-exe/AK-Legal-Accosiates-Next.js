import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="text-primary-foreground py-12"
      style={{
        background:
          "linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #3b82f6 50%, #1e40af 75%, #1e3a8a 100%)",
      }}
    >
      <h2 className="text-3xl font-bold text-secondary text-center mb-10">
        "Innovative Solution, Swift Remedies, Your Success, Our Priotrity "
      </h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AK Legal Associates</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premier legal services delivering expert counsel and strategic
              solutions for your legal needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <Mail size={16} className="mt-0.5" />
                <span>mahsanmasoodkhan27@gmail.com</span>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="mt-0.5" />
                <span>+92 3159833484</span>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>Peshawar High Court building, Saddar road, Peshawar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; 2025 AK Legal Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
