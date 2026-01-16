import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Faraz | AI Software Engineer",
  description: "AI Software Engineer with 3 years of experience building intelligent systems with RAG, LLMs, and predictive analytics. Specializing in full-stack AI applications.",
  keywords: ["AI Engineer", "Faraz", "RAG Systems", "LLM", "FastAPI", "React", "Data Analytics", "Machine Learning", "Python"],
  authors: [{ name: "Faraz" }],
  openGraph: {
    title: "Faraz | AI Software Engineer",
    description: "Building intelligent systems with RAG, LLMs, and predictive analytics",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[var(--background)] text-white overflow-x-hidden`}
      >
        {/* Scanline Overlay */}
        <div className="fixed inset-0 w-full h-full scanlines z-50 pointer-events-none opacity-20" />

        {/* Background Grid */}
        <div className="fixed inset-0 w-full h-full bg-grid-pattern opacity-[0.07] pointer-events-none z-0" />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
