"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CounterProps {
    end: number;
    suffix?: string;
    duration?: number;
}

function AnimatedCounter({ end, suffix = "", duration = 2000 }: CounterProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function MetricsDashboard() {
    return (
        <div className="flex flex-col gap-6">
            {/* Metrics Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Live Projects - Large Card */}
                <motion.div
                    className="col-span-1 sm:col-span-2 relative p-5 rounded-xl border border-[var(--glass-border)] bg-[#15191c]/80 backdrop-blur-sm overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute right-0 top-0 p-4 opacity-10">
                        <span className="text-6xl">&#128640;</span>
                    </div>
                    <p className="text-xs font-mono text-[var(--primary)] mb-1 tracking-wider">
                        LIVE SYSTEMS
                    </p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-white font-mono text-glow">
                            <AnimatedCounter end={3} />
                        </span>
                        <span className="text-xs text-gray-500 font-mono">PRODUCTION APPS</span>
                    </div>
                    <div className="w-full bg-gray-800 h-1 mt-4 rounded-full overflow-hidden">
                        <motion.div
                            className="bg-[var(--primary)] h-full shadow-[0_0_10px_var(--primary)]"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </div>
                </motion.div>

                {/* Experience */}
                <motion.div
                    className="relative p-5 rounded-xl border border-[var(--glass-border)] bg-[#15191c]/80 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <p className="text-xs font-mono text-gray-400 mb-1">EXPERIENCE</p>
                    <span className="text-3xl font-bold text-white font-mono">
                        <AnimatedCounter end={3} /> Years
                    </span>
                    <div className="text-[10px] text-[var(--primary)] mt-2 flex items-center gap-1">
                        <span>&#128187;</span> AI Software Engineer
                    </div>
                </motion.div>

                {/* Tech Focus */}
                <motion.div
                    className="relative p-5 rounded-xl border border-[var(--glass-border)] bg-[#15191c]/80 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-xs font-mono text-gray-400 mb-1">TECH FOCUS</p>
                    <span className="text-2xl font-bold text-white font-mono">
                        RAG & LLMs
                    </span>
                    <div className="text-[10px] text-green-400 mt-2 flex items-center gap-1">
                        <span>&#10003;</span> Full-Stack AI
                    </div>
                </motion.div>
            </div>

            {/* Tech Stack Display */}
            <motion.div
                className="flex-grow min-h-[300px] relative rounded-2xl border border-[var(--glass-border)] glass-panel flex items-center justify-center overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Label */}
                <div className="absolute top-4 right-4 text-xs font-mono text-gray-500 z-20">
                    TECH_STACK_VIEW
                </div>

                {/* Core */}
                <motion.div
                    className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-black border border-[var(--primary)]/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,225,255,0.3)]"
                    animate={{
                        boxShadow: [
                            "0 0 20px rgba(0, 225, 255, 0.2)",
                            "0 0 40px rgba(0, 225, 255, 0.4)",
                            "0 0 20px rgba(0, 225, 255, 0.2)"
                        ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <span className="text-3xl">&#129302;</span>
                </motion.div>

                {/* Inner Orbit Ring */}
                <motion.div
                    className="absolute border border-gray-700/50 rounded-full w-48 h-48"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {/* Orbiting Items */}
                    <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1b2226] p-1.5 rounded-full border border-gray-600 shadow-lg"
                        title="FastAPI"
                    >
                        <div className="w-6 h-6 flex items-center justify-center text-green-400 font-bold text-xs">
                            FA
                        </div>
                    </div>
                    <div
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#1b2226] p-1.5 rounded-full border border-gray-600 shadow-lg"
                        title="React"
                    >
                        <div className="w-6 h-6 flex items-center justify-center text-cyan-400 font-bold text-xs">
                            Re
                        </div>
                    </div>
                </motion.div>

                {/* Middle Orbit Ring */}
                <motion.div
                    className="absolute border border-dashed border-gray-700/30 rounded-full w-72 h-72"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                    <div
                        className="absolute top-1/2 -right-4 -translate-y-1/2 bg-[#1b2226] p-2 rounded-full border border-gray-600 shadow-lg"
                        title="LangChain"
                    >
                        <div className="w-6 h-6 flex items-center justify-center text-yellow-400 font-bold text-xs">
                            LC
                        </div>
                    </div>
                    <div
                        className="absolute top-1/2 -left-4 -translate-y-1/2 bg-[#1b2226] p-2 rounded-full border border-gray-600 shadow-lg"
                        title="Python"
                    >
                        <div className="w-6 h-6 flex items-center justify-center text-blue-400 font-bold text-xs">
                            Py
                        </div>
                    </div>
                </motion.div>

                {/* Outer Orbit Ring */}
                <div className="absolute border border-gray-800 rounded-full w-96 h-96 opacity-50" />

                {/* Floating OpenAI Icon */}
                <motion.div
                    className="absolute top-10 right-10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="bg-[#1b2226] p-2 rounded-full border border-[var(--primary)]/50 shadow-[0_0_15px_rgba(0,225,255,0.3)]">
                        <span className="text-white text-lg">&#8734;</span>
                    </div>
                </motion.div>

                {/* Decoration Particles */}
                <div className="absolute w-1 h-1 bg-[var(--primary)] rounded-full top-1/4 left-1/4 animate-ping" />
                <div className="absolute w-1 h-1 bg-[var(--secondary)] rounded-full bottom-1/3 right-1/4 animate-pulse" />
            </motion.div>
        </div>
    );
}
