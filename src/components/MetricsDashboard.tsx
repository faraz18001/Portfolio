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

const techStack = {
    languages: [
        { name: "Python", icon: "PY", color: "#3776AB" },
        { name: "C++", icon: "C+", color: "#00599C" },
    ],
    aiml: [
        { name: "LangChain", icon: "LC", color: "#00e1ff" },
        { name: "HuggingFace", icon: "HF", color: "#FFD21E" },
        { name: "OpenAI", icon: "OA", color: "#00A67E" },
        { name: "Ollama", icon: "OL", color: "#ffffff" },
    ],
    backend: [
        { name: "FastAPI", icon: "FA", color: "#009688" },
        { name: "FAISS", icon: "FS", color: "#B537F2" },
        { name: "DuckDB", icon: "DB", color: "#FFC107" },
    ],
    frontend: [
        { name: "React", icon: "Re", color: "#61DAFB" },
        { name: "Vite", icon: "Vt", color: "#646CFF" },
    ],
    devops: [
        { name: "Docker", icon: "Dk", color: "#2496ED" },
        { name: "Git", icon: "Gt", color: "#F05032" },
        { name: "Jupyter", icon: "Jp", color: "#F37626" },
        { name: "Vertex AI", icon: "VA", color: "#4285F4" },
    ],
};

interface TechItemProps {
    name: string;
    icon: string;
    color: string;
    delay: number;
}

function TechItem({ name, icon, color, delay }: TechItemProps) {
    return (
        <motion.div
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#15191c] border border-gray-800 hover:border-gray-600 transition-all group cursor-default"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay }}
            whileHover={{ scale: 1.05 }}
        >
            <div
                className="w-7 h-7 rounded flex items-center justify-center font-mono text-xs font-bold border"
                style={{
                    color: color,
                    borderColor: `${color}40`,
                    backgroundColor: `${color}10`,
                    textShadow: `0 0 10px ${color}50`
                }}
            >
                {icon}
            </div>
            <span className="text-xs font-mono text-gray-300 group-hover:text-white transition-colors">
                {name}
            </span>
        </motion.div>
    );
}

interface TechCategoryProps {
    title: string;
    items: Array<{ name: string; icon: string; color: string }>;
    baseDelay: number;
}

function TechCategory({ title, items, baseDelay }: TechCategoryProps) {
    return (
        <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-[var(--primary)] font-mono text-xs">//</span>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{title}</span>
            </div>
            <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                    <TechItem
                        key={item.name}
                        name={item.name}
                        icon={item.icon}
                        color={item.color}
                        delay={baseDelay + index * 0.05}
                    />
                ))}
            </div>
        </div>
    );
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
                        <span className="text-6xl font-mono">&gt;_</span>
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
                    <div className="text-[10px] text-[var(--primary)] mt-2 flex items-center gap-1 font-mono">
                        <span>[*]</span> AI Software Engineer
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
                    <div className="text-[10px] text-green-400 mt-2 flex items-center gap-1 font-mono">
                        <span>[OK]</span> Full-Stack AI
                    </div>
                </motion.div>
            </div>

            {/* Tech Stack Display */}
            <motion.div
                className="flex-grow relative rounded-2xl border border-[var(--glass-border)] glass-panel p-6 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-800">
                    <div className="flex items-center gap-2">
                        <span className="text-[var(--primary)] font-mono">&gt;_</span>
                        <span className="text-sm font-mono text-gray-400">tech_stack.config</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-mono text-gray-600">LOADED</span>
                    </div>
                </div>

                {/* Tech Categories */}
                <TechCategory title="languages" items={techStack.languages} baseDelay={0.1} />
                <TechCategory title="ai_ml" items={techStack.aiml} baseDelay={0.2} />
                <TechCategory title="backend" items={techStack.backend} baseDelay={0.3} />
                <TechCategory title="frontend" items={techStack.frontend} baseDelay={0.4} />
                <TechCategory title="devops" items={techStack.devops} baseDelay={0.5} />

                {/* Scanline Effect */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-5"
                    style={{
                        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 225, 255, 0.03) 2px, rgba(0, 225, 255, 0.03) 4px)"
                    }}
                />
            </motion.div>
        </div>
    );
}
