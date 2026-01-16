"use client";

import { motion } from "framer-motion";
import SkillMatrix from "./SkillMatrix";
import MetricsDashboard from "./MetricsDashboard";

export default function SkillsSection() {
    return (
        <section id="skills" className="relative py-20 px-6 lg:px-20">
            {/* Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] pointer-events-none z-0" />
            <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[var(--background)]/0 via-[var(--background)]/50 to-[var(--background)] pointer-events-none z-0" />

            <div className="relative z-10 max-w-screen-2xl mx-auto w-full">
                {/* Header */}
                <motion.header
                    className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--glass-border)] pb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <div className="flex items-center gap-2 text-[var(--primary)]/60 mb-2 font-mono text-xs tracking-widest uppercase">
                            <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse" />
                            System Status: Online
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            NEURAL PROFICIENCY
                        </h2>
                        <p className="text-gray-400 mt-2 max-w-lg text-lg">
                            Real-time analysis of technical competencies and deployment metrics.
                        </p>
                    </div>
                    <div className="font-mono text-right hidden md:block text-xs text-gray-500">
                        <p>ID: 8X-9291</p>
                        <p>LOC: 127.0.0.1</p>
                    </div>
                </motion.header>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
                    {/* Left: Radar Chart */}
                    <motion.div
                        className="lg:col-span-7 flex flex-col"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <SkillMatrix />
                    </motion.div>

                    {/* Right: Metrics Dashboard */}
                    <motion.div
                        className="lg:col-span-5"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <MetricsDashboard />
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.footer
                    className="mt-10 border-t border-[var(--glass-border)] pt-4 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="text-xs font-mono text-gray-600">
                        SYSTEM ARCHITECTURE v2.4.0 - SECURE CONNECTION ESTABLISHED
                    </p>
                </motion.footer>
            </div>
        </section>
    );
}
