"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 bg-grid-pattern opacity-20"
                    style={{
                        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
                        WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)"
                    }}
                />

                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-[120px]" />

                {/* Neural Network Nodes */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-2 h-2 bg-[var(--primary)] rounded-full shadow-glow"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[var(--secondary)] rounded-full shadow-glow-purple"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                />

                {/* Connection Lines */}
                <div className="absolute top-1/4 left-1/4 w-32 h-[1px] bg-gradient-to-r from-[var(--primary)]/50 to-transparent rotate-45 transform origin-top-left" />
                <div className="absolute bottom-1/3 right-1/4 w-40 h-[1px] bg-gradient-to-l from-[var(--secondary)]/50 to-transparent rotate-45 transform origin-bottom-right" />

                {/* Floating Small Particles */}
                <div className="absolute top-[15%] right-[15%] w-1 h-1 bg-[var(--primary)]/40 rounded-full" />
                <div className="absolute bottom-[10%] left-[10%] w-1.5 h-1.5 bg-[var(--primary)]/30 rounded-full" />
                <div className="absolute top-[60%] left-[8%] w-1 h-1 bg-[var(--secondary)]/30 rounded-full" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
                {/* Status Badge */}
                <motion.div
                    className="mb-8 flex items-center gap-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-4 py-1.5 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
                    <span className="font-mono text-xs font-medium text-[var(--primary)] tracking-wider">
                        AVAILABLE FOR NEW PROJECTS
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.div
                    className="relative mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter pb-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                            Hey, I&apos;m
                        </span>
                        <br className="hidden md:block" />
                        <span className="text-white drop-shadow-[0_0_15px_rgba(0,225,255,0.3)]">
                            Faraz
                        </span>
                    </h1>

                    {/* Decorative Lines */}
                    <div className="absolute -left-12 top-1/2 w-8 h-[1px] bg-[var(--primary)]/30 hidden md:block" />
                    <div className="absolute -right-12 top-1/2 w-8 h-[1px] bg-[var(--primary)]/30 hidden md:block" />
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    className="max-w-xl text-lg text-gray-400 mb-10 leading-relaxed font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    AI Software Engineer building{" "}
                    <span className="text-white font-medium">intelligent systems</span> with{" "}
                    <span className="text-white font-medium">RAG</span>,{" "}
                    <span className="text-white font-medium">LLMs</span>, and{" "}
                    <span className="text-white font-medium">predictive analytics</span>.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] opacity-75 blur transition duration-500 group-hover:opacity-100" />
                    <a
                        href="#projects"
                        className="relative flex items-center justify-center gap-3 rounded-lg bg-[var(--background)] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#0c1624]"
                    >
                        <span>View My Work</span>
                        <ArrowRight className="w-5 h-5 text-[var(--primary)] group-hover:translate-x-1 transition-transform" weight="bold" />
                    </a>
                </motion.div>

                {/* Floating Context Chips */}
                <motion.div
                    className="absolute top-[10%] left-[5%] md:top-[20%] md:left-[10%] hidden lg:flex flex-col items-center gap-2"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                >
                    <div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-2 border-l-2 border-l-[var(--primary)]">
                        <span className="text-[var(--primary)] text-sm font-mono">[~]</span>
                        <span className="text-gray-200 text-xs font-mono font-bold uppercase tracking-wider">
                            Data Analytics
                        </span>
                    </div>
                    <div className="h-12 w-[1px] bg-gradient-to-b from-[var(--primary)]/40 to-transparent" />
                </motion.div>

                <motion.div
                    className="absolute bottom-[15%] right-[5%] md:bottom-[25%] md:right-[12%] hidden lg:flex flex-col-reverse items-center gap-2"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                >
                    <div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-2 border-r-2 border-r-[var(--secondary)]">
                        <span className="text-[var(--secondary)] text-sm font-mono">[*]</span>
                        <span className="text-gray-200 text-xs font-mono font-bold uppercase tracking-wider">
                            RAG Systems
                        </span>
                    </div>
                    <div className="h-12 w-[1px] bg-gradient-to-t from-[var(--secondary)]/40 to-transparent" />
                </motion.div>

                <motion.div
                    className="absolute bottom-[30%] left-[2%] hidden xl:flex flex-row items-center gap-2 opacity-80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <div className="w-8 h-[1px] bg-gray-700" />
                    <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-gray-300 text-[10px] font-mono uppercase tracking-wider">
                            ML Forecasting
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Stats Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 border-t border-[var(--glass-border)] bg-[var(--glass-bg)]/30 backdrop-blur-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-wrap justify-between items-center gap-6">
                        {/* Tech Stack */}
                        <div className="flex items-center gap-3 text-gray-400">
                            <span className="text-[var(--primary)] font-mono">&gt;_</span>
                            <span className="text-sm font-mono">Python // FastAPI // React // LangChain</span>
                        </div>

                        {/* Metrics */}
                        <div className="flex gap-6">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Projects</span>
                                <span className="text-white font-mono text-sm">3 Live Systems</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Experience</span>
                                <span className="text-white font-mono text-sm">3 Years</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Status</span>
                                <span className="text-[var(--primary)] font-mono text-sm flex items-center gap-1">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]" />
                                    </span>
                                    Open to Work
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
