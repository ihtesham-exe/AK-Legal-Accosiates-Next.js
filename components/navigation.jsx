"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="text-secondary sticky top-0 z-50 shadow-lg h-25"
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
            className="h-18 w-auto"
            width={60}
            height={50}
          />

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
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 pb-4 space-y-2 border-t border-primary-foreground/20 pt-4">
            <Link
              href="/"
              className="block hover:text-accent transition-colors transform hover:translate-x-2 duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block hover:text-accent transition-colors transform hover:translate-x-2 duration-200"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block hover:text-accent transition-colors transform hover:translate-x-2 duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block hover:text-accent transition-colors transform hover:translate-x-2 duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
