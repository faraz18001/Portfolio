"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
    { name: "RAG SYSTEMS", value: 95, icon: "[~]" },
    { name: "PYTHON", value: 95, icon: "[#]" },
    { name: "LLM AGENTS", value: 90, icon: "[*]" },
    { name: "DATA ANALYTICS", value: 90, icon: "[$]" },
    { name: "FULL STACK", value: 85, icon: "[>]" },
    { name: "ML / FORECASTING", value: 80, icon: "[%]" },
];

interface TerminalBarProps {
    name: string;
    value: number;
    icon: string;
    delay: number;
}

function TerminalBar({ name, value, icon, delay }: TerminalBarProps) {
    const [displayedValue, setDisplayedValue] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const totalBlocks = 20;
    const filledBlocks = Math.round((displayedValue / 100) * totalBlocks);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (!isVisible) return;

        let current = 0;
        const increment = value / 30;
        const interval = setInterval(() => {
            current += increment;
            if (current >= value) {
                setDisplayedValue(value);
                clearInterval(interval);
            } else {
                setDisplayedValue(Math.floor(current));
            }
        }, 30);

        return () => clearInterval(interval);
    }, [isVisible, value]);

    // Build the progress bar string
    let barString = "";
    for (let i = 0; i < totalBlocks; i++) {
        if (i < filledBlocks) {
            barString += "█";
        } else {
            barString += "░";
        }
    }

    return (
        <motion.div
            className="font-mono text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
        >
            {/* Skill Name Row */}
            <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                    <span className="text-[var(--primary)]">{icon}</span>
                    <span className="text-gray-300 text-xs tracking-wider">{name}</span>
                </div>
                <span className="text-[var(--primary)] text-xs">
                    {displayedValue}%
                </span>
            </div>

            {/* Progress Bar Row */}
            <div className="flex items-center gap-2">
                <span className="text-gray-600">[</span>
                <div className="relative flex-1">
                    <span
                        className="text-[var(--primary)] tracking-[0.15em]"
                        style={{
                            textShadow: "0 0 10px rgba(0, 225, 255, 0.5)"
                        }}
                    >
                        {barString.slice(0, filledBlocks)}
                    </span>
                    <span className="text-gray-700 tracking-[0.15em]">
                        {barString.slice(filledBlocks)}
                    </span>
                </div>
                <span className="text-gray-600">]</span>
            </div>
        </motion.div>
    );
}

export default function SkillMatrix() {
    return (
        <div className="relative flex-grow min-h-[500px] rounded-2xl border border-[var(--glass-border)] glass-panel p-6 lg:p-8 flex flex-col overflow-hidden group corner-borders">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-[var(--primary)] font-mono text-sm">&gt;_</span>
                        <span className="text-xs font-mono text-[var(--primary)]/70 tracking-widest">
                            SKILL_MATRIX.exe
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Core Competencies</h3>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-gray-500">RUNNING</span>
                </div>
            </div>

            {/* Terminal Output Header */}
            <div className="font-mono text-xs text-gray-500 mb-4">
                <p className="text-green-400">$ analyzing skills...</p>
                <p className="text-gray-600">Loading proficiency data...</p>
                <p className="text-gray-600">---</p>
            </div>

            {/* Skill Bars */}
            <div className="flex flex-col gap-5 flex-grow">
                {skills.map((skill, index) => (
                    <TerminalBar
                        key={skill.name}
                        name={skill.name}
                        value={skill.value}
                        icon={skill.icon}
                        delay={index * 150}
                    />
                ))}
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-800 font-mono text-xs text-gray-500">
                <div className="flex items-center justify-between">
                    <span>
                        <span className="text-green-400">$</span> scan complete
                    </span>
                    <span className="text-gray-600">
                        {skills.length} skills indexed
                    </span>
                </div>
            </div>

            {/* Scanline Effect */}
            <div
                className="absolute inset-0 pointer-events-none opacity-5"
                style={{
                    background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 225, 255, 0.03) 2px, rgba(0, 225, 255, 0.03) 4px)"
                }}
            />
        </div>
    );
}
