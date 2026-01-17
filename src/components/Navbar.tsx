"use client";

import { useState } from "react";
import Link from "next/link";
import { List, X, Code } from "@phosphor-icons/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 sm:px-8">
      <nav className="glass-panel flex w-full max-w-5xl items-center justify-between rounded-full px-6 py-3 shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20">
            <Code className="w-5 h-5 text-[var(--primary)]" weight="bold" />
          </div>
          <span className="text-white text-lg font-bold tracking-tight">
            FARAZ<span className="text-[var(--primary)]">.DEV</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#projects"
            className="text-gray-300 hover:text-[var(--primary)] text-sm font-medium transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-gray-300 hover:text-[var(--primary)] text-sm font-medium transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#playground"
            className="text-gray-300 hover:text-[var(--primary)] text-sm font-medium transition-colors"
          >
            Playground
          </Link>
          <Link
            href="#contact"
            className="text-gray-300 hover:text-[var(--primary)] text-sm font-medium transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden sm:flex items-center justify-center rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/40 hover:bg-[var(--primary)] hover:text-[var(--background)] px-5 py-2 text-sm font-bold text-[var(--primary)] transition-all duration-300"
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" weight="bold" /> : <List className="w-6 h-6" weight="bold" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 glass-panel rounded-2xl p-6 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="#projects"
              className="text-gray-300 hover:text-[var(--primary)] text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-gray-300 hover:text-[var(--primary)] text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#playground"
              className="text-gray-300 hover:text-[var(--primary)] text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Playground
            </Link>
            <Link
              href="#contact"
              className="text-[var(--primary)] text-base font-bold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
