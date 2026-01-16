"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "RAG SYSTEMS", value: 95, angle: 0 },
    { name: "DATA ANALYTICS", value: 90, angle: 60 },
    { name: "FULL STACK", value: 85, angle: 120 },
    { name: "ML / FORECASTING", value: 80, angle: 180 },
    { name: "LLM AGENTS", value: 90, angle: 240 },
    { name: "PYTHON", value: 95, angle: 300 },
];

export default function SkillMatrix() {
    // Calculate polygon points based on skill values
    const calculatePoint = (angle: number, value: number, centerX: number, centerY: number, maxRadius: number) => {
        const normalizedValue = value / 100;
        const radius = normalizedValue * maxRadius;
        const radians = (angle - 90) * (Math.PI / 180);
        const x = centerX + radius * Math.cos(radians);
        const y = centerY + radius * Math.sin(radians);
        return { x, y };
    };

    const centerX = 200;
    const centerY = 200;
    const maxRadius = 160;

    // Generate polygon points
    const polygonPoints = skills.map(skill => {
        const point = calculatePoint(skill.angle, skill.value, centerX, centerY, maxRadius);
        return `${point.x},${point.y}`;
    }).join(" ");

    // Generate label positions
    const labelPositions = skills.map(skill => {
        const labelRadius = maxRadius + 40;
        const radians = (skill.angle - 90) * (Math.PI / 180);
        return {
            name: skill.name,
            x: centerX + labelRadius * Math.cos(radians),
            y: centerY + labelRadius * Math.sin(radians),
        };
    });

    // Generate data point positions
    const dataPoints = skills.map(skill => {
        return calculatePoint(skill.angle, skill.value, centerX, centerY, maxRadius);
    });

    return (
        <div className="relative flex-grow min-h-[500px] rounded-2xl border border-[var(--glass-border)] glass-panel p-6 lg:p-10 flex flex-col items-center justify-center overflow-hidden group corner-borders">
            {/* Chart Title */}
            <div className="absolute top-6 left-8 flex flex-col gap-1">
                <span className="text-xs font-mono text-[var(--primary)]/70 tracking-widest">
                    SKILL_MATRIX
                </span>
                <h3 className="text-xl font-bold text-white">Core Competencies</h3>
            </div>

            {/* SVG Radar Chart */}
            <div className="relative w-full max-w-lg aspect-square mt-8">
                <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full drop-shadow-[0_0_15px_rgba(0,225,255,0.15)]"
                >
                    <defs>
                        <radialGradient id="radar-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" stopColor="rgba(0, 225, 255, 0.1)" />
                            <stop offset="100%" stopColor="rgba(0, 225, 255, 0)" />
                        </radialGradient>
                        <linearGradient id="poly-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00e1ff" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#B537F2" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>

                    {/* Background Circles/Grid */}
                    <g fill="none" stroke="rgb(55, 65, 81)" strokeWidth="1">
                        <circle cx={centerX} cy={centerY} r={40} opacity={0.5} />
                        <circle cx={centerX} cy={centerY} r={80} opacity={0.5} />
                        <circle cx={centerX} cy={centerY} r={120} opacity={0.5} />
                        <circle cx={centerX} cy={centerY} r={160} opacity={0.5} />
                    </g>

                    {/* Axes */}
                    <g stroke="rgb(55, 65, 81)" strokeWidth="1" strokeDasharray="4 4">
                        {skills.map((skill, i) => {
                            const endPoint = calculatePoint(skill.angle, 100, centerX, centerY, maxRadius);
                            return (
                                <line
                                    key={i}
                                    x1={centerX}
                                    y1={centerY}
                                    x2={endPoint.x}
                                    y2={endPoint.y}
                                />
                            );
                        })}
                    </g>

                    {/* Data Polygon */}
                    <motion.polygon
                        points={polygonPoints}
                        fill="url(#poly-gradient)"
                        stroke="#00e1ff"
                        strokeWidth="2"
                        className="drop-shadow-[0_0_10px_rgba(0,225,255,0.6)]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />

                    {/* Data Points */}
                    <g fill="#0b1013" stroke="#00e1ff" strokeWidth="2">
                        {dataPoints.map((point, i) => (
                            <motion.circle
                                key={i}
                                cx={point.x}
                                cy={point.y}
                                r={4}
                                className="cursor-pointer hover:fill-[var(--primary)] transition-colors"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                            />
                        ))}
                    </g>

                    {/* Labels */}
                    <g
                        className="text-[11px] font-mono font-bold"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fill="rgb(209, 213, 219)"
                    >
                        {labelPositions.map((label, i) => (
                            <text key={i} x={label.x} y={label.y}>
                                {label.name}
                            </text>
                        ))}
                    </g>
                </svg>
            </div>
        </div>
    );
}
