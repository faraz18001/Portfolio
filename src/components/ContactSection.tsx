"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, Twitter, Download } from "lucide-react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: "", email: "", message: "" });

            setTimeout(() => setIsSubmitted(false), 3000);
        }, 1500);
    };

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
        { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
        { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
        { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" },
    ];

    return (
        <section id="contact" className="relative py-20 px-6 lg:px-20 overflow-hidden">
            {/* Background Particles */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[var(--secondary)]/10 rounded-full blur-[100px]" />

                {/* Floating Particles */}
                <motion.div
                    className="absolute top-[20%] left-[10%] w-2 h-2 bg-[var(--primary)]/40 rounded-full"
                    animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-[40%] right-[15%] w-1.5 h-1.5 bg-[var(--secondary)]/40 rounded-full"
                    animate={{ y: [0, 15, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                    className="absolute bottom-[30%] left-[20%] w-1 h-1 bg-[var(--accent)]/40 rounded-full"
                    animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                />
                <motion.div
                    className="absolute top-[60%] right-[25%] w-2 h-2 bg-[var(--primary)]/30 rounded-full"
                    animate={{ y: [0, 20, 0], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center gap-2 text-[var(--primary)]/60 mb-4">
                        <div className="w-8 h-[1px] bg-[var(--primary)]/40" />
                        <span className="text-xs font-mono tracking-widest uppercase">Establish Connection</span>
                        <div className="w-8 h-[1px] bg-[var(--primary)]/40" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Let&apos;s Build Something
                        <span className="text-[var(--primary)]"> Intelligent</span>
                    </h2>
                    <p className="text-gray-400 max-w-lg mx-auto">
                        Have a project in mind? Looking for AI expertise? Let&apos;s connect and explore the possibilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Contact Form */}
                    <motion.div
                        className="lg:col-span-3 glass-panel rounded-2xl p-8 relative corner-borders"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-[#0f1214] border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] transition-all placeholder:text-gray-600"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-[#0f1214] border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] transition-all placeholder:text-gray-600"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                                    Message
                                </label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={4}
                                    className="w-full bg-[#0f1214] border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] transition-all resize-none placeholder:text-gray-600"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || isSubmitted}
                                className={`
                  w-full py-4 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all
                  ${isSubmitted
                                        ? "bg-green-500 text-white"
                                        : "bg-[var(--primary)] text-black hover:bg-white shadow-[0_0_20px_rgba(0,225,255,0.3)] hover:shadow-[0_0_30px_rgba(0,225,255,0.5)]"
                                    }
                `}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                        Transmitting...
                                    </>
                                ) : isSubmitted ? (
                                    <>
                                        <span>&#10003;</span>
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Side Panel */}
                    <motion.div
                        className="lg:col-span-2 flex flex-col gap-6"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {/* Social Links */}
                        <div className="glass-panel rounded-2xl p-6">
                            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">
                                Connect
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {socialLinks.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.href}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-[#15191c] border border-gray-800 hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/10 transition-all group"
                                    >
                                        <span className="text-gray-400 group-hover:text-[var(--primary)] transition-colors">
                                            {link.icon}
                                        </span>
                                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                            {link.label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Resume Download */}
                        <div className="glass-panel rounded-2xl p-6 flex-grow">
                            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">
                                Resume
                            </h3>
                            <div className="flex flex-col items-center justify-center h-full py-6">
                                <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 flex items-center justify-center mb-4">
                                    <Download className="w-8 h-8 text-[var(--primary)]" />
                                </div>
                                <p className="text-gray-400 text-sm text-center mb-4">
                                    Download my full resume with detailed project history and skills.
                                </p>
                                <button className="px-6 py-3 rounded-lg border border-[var(--primary)]/40 text-[var(--primary)] font-bold text-sm uppercase tracking-wider hover:bg-[var(--primary)] hover:text-black transition-all">
                                    Download CV
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    className="mt-16 pt-8 border-t border-gray-800 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="text-xs font-mono text-gray-600">
                        NEURAL.DEV - 2026 // SECURE CONNECTION ESTABLISHED
                    </p>
                    <p className="text-xs font-mono text-gray-700 mt-2">
                        Built with Next.js, TypeScript & Framer Motion
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
