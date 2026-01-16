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
  title: "Neural.Dev | AI Software Engineer Portfolio",
  description: "AI Software Engineer specializing in Deep Learning, LLMs, Computer Vision, and Data Analytics. Architecting intelligent systems and cognitive pipelines.",
  keywords: ["AI Engineer", "Machine Learning", "Deep Learning", "LLMs", "Computer Vision", "Data Analytics", "Python", "TensorFlow", "PyTorch"],
  authors: [{ name: "Neural.Dev" }],
  openGraph: {
    title: "Neural.Dev | AI Software Engineer Portfolio",
    description: "Architecting intelligent systems using Deep Learning & LLMs",
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
