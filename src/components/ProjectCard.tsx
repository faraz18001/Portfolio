"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    status: "Live" | "Research" | "Beta";
    statusColor: string;
    image: string;
    codePreview: string;
    accentColor: string;
    actionLabel: string;
    actionIcon: "github" | "play" | "link";
}

export default function ProjectCard({
    title,
    description,
    techStack,
    status,
    statusColor,
    image,
    codePreview,
    accentColor,
    actionLabel,
    actionIcon,
}: ProjectCardProps) {
    const iconMap = {
        github: <Github className="w-4 h-4" />,
        play: <Play className="w-4 h-4" />,
        link: <ExternalLink className="w-4 h-4" />,
    };

    return (
        <div className="card-3d h-[400px] w-full group cursor-pointer">
            <div
                className="gradient-border-wrapper h-full w-full transition-shadow duration-500"
                style={{
                    boxShadow: `0 0 30px -10px ${accentColor}25`,
                }}
            >
                <motion.div
                    className="card-3d-inner h-full w-full relative rounded-xl overflow-hidden bg-[#101818]"
                    whileHover={{
                        boxShadow: `0 0 50px -10px ${accentColor}40`,
                    }}
                >
                    {/* Default State */}
                    <div className="flex flex-col h-full relative z-10">
                        {/* Image Section */}
                        <div
                            className="h-1/2 w-full bg-cover bg-center relative"
                            style={{
                                backgroundImage: `url('${image}')`,
                                backgroundColor: "#1a2325"
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#101818] to-transparent" />

                            {/* Status Badge */}
                            <div
                                className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur px-2 py-1 rounded-full border"
                                style={{ borderColor: `${statusColor}50` }}
                            >
                                <div
                                    className="w-2 h-2 rounded-full animate-pulse"
                                    style={{ backgroundColor: statusColor }}
                                />
                                <span
                                    className="text-[10px] font-mono uppercase"
                                    style={{ color: statusColor }}
                                >
                                    {status}
                                </span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 flex flex-col justify-between flex-1 bg-[rgba(16,24,24,0.9)] backdrop-blur-xl rounded-b-xl">
                            <div>
                                <h3
                                    className="text-2xl font-bold uppercase leading-tight mb-2 transition-colors group-hover:text-[var(--primary)]"
                                    style={{
                                        transition: "color 0.3s ease",
                                    }}
                                >
                                    {title}
                                </h3>
                                <p className="text-sm text-[#9ab8bc] font-sans line-clamp-2">
                                    {description}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex gap-2 flex-wrap mt-4">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="tech-badge px-2 py-1 bg-[#1a2325] border border-[#27383a] rounded text-[10px] font-mono text-white/60 transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Hover Reveal Overlay */}
                    <div className="hover-reveal absolute inset-0 z-20 flex flex-col p-6 backdrop-blur-xl">
                        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                            <span
                                className="text-xs font-mono uppercase tracking-widest"
                                style={{ color: accentColor }}
                            >
                                Architecture.json
                            </span>
                            <span className="text-white/50 text-sm">&#128196;</span>
                        </div>

                        {/* Code Preview */}
                        <div className="flex-1 overflow-hidden relative font-mono text-xs leading-relaxed opacity-80">
                            <div
                                className="absolute top-0 left-0 w-[1px] h-full opacity-20"
                                style={{
                                    background: `linear-gradient(to bottom, transparent, ${accentColor}, transparent)`
                                }}
                            />
                            <pre className="text-blue-300 whitespace-pre-wrap">
                                {codePreview}
                            </pre>
                        </div>

                        {/* Action Button */}
                        <button
                            className="mt-4 w-full py-3 rounded uppercase text-xs font-bold tracking-widest transition-all flex items-center justify-center gap-2 border"
                            style={{
                                backgroundColor: `${accentColor}20`,
                                color: accentColor,
                                borderColor: `${accentColor}40`
                            }}
                        >
                            <span>{actionLabel}</span>
                            {iconMap[actionIcon]}
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
