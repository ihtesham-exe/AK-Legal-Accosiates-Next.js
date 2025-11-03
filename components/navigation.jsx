"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="text-secondary sticky top-0 z-50 shadow-lg"
      style={{
        background:
          "linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #3b82f6 50%, #1e40af 75%, #1e3a8a 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Image
            src="/logo-ak-firm.png"
            alt="AK Legal Associates"
            className="h-8"
            width={60}
            height={500}
          />
          <Link href="/" className="text-3xl font-bold">
            AK Legal Associates
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-lg">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-accent transition-colors"
            >
              Services
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-primary-foreground/20 pt-4">
            <Link
              href="/"
              className="block hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block hover:text-accent transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
