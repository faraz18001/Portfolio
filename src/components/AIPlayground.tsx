"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shuffle, Lightning, Code, FileCode, Terminal } from "@phosphor-icons/react";

const codeContent = `import torch
from transformers import BertTokenizer, BertForSequenceClassification

# Initialize tokenizer and model
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base-uncased')

def analyze_sentiment(text_input):
    """Run inference on input text"""
    inputs = tokenizer(text_input, return_tensors="pt", padding=True, truncation=True)
    
    # Perform prediction
    with torch.no_grad():
        logits = model(**inputs).logits
    
    probabilities = torch.softmax(logits, dim=1).tolist()[0]
    labels = ["Negative", "Neutral", "Positive"]
    
    # Map scores to labels
    result = {}
    for i in range(len(labels)):
        result[labels[i]] = probabilities[i]
    
    return result

# Main execution loop
if __name__ == "__main__":
    print("Model loaded. Ready for input...")`;

const sampleInputs = [
    "The new neural network architecture showed promising results, although training stability remains a challenge.",
    "This is an incredible breakthrough in AI technology!",
    "The model performance was disappointing and failed to meet expectations.",
    "The weather today is cloudy with a chance of rain.",
];

export default function AIPlayground() {
    const [inputText, setInputText] = useState(sampleInputs[0]);
    const [predictions, setPredictions] = useState({
        positive: 12.4,
        neutral: 88.5,
        negative: 0.1,
    });
    const [isRunning, setIsRunning] = useState(false);

    const handleRandomSample = () => {
        const randomIndex = Math.floor(Math.random() * sampleInputs.length);
        setInputText(sampleInputs[randomIndex]);
    };

    const handleRunInference = () => {
        setIsRunning(true);
        // Simulate inference with random results
        setTimeout(() => {
            const positive = Math.random() * 40;
            const negative = Math.random() * 20;
            const neutral = 100 - positive - negative;
            setPredictions({
                positive: Math.round(positive * 10) / 10,
                neutral: Math.round(neutral * 10) / 10,
                negative: Math.round(negative * 10) / 10,
            });
            setIsRunning(false);
        }, 800);
    };

    return (
        <section id="playground" className="relative py-20 px-4 lg:px-8">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--primary)]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--secondary)]/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 flex items-center justify-center rounded bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-black">
                            <Terminal className="w-5 h-5" weight="bold" />
                        </div>
                        <h2 className="text-white text-lg font-bold tracking-wider uppercase">
                            AI Playground <span className="text-[var(--primary)] font-mono">//</span> Demo
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Pane: Input & Prediction */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {/* Input Section */}
                        <div className="glass-panel rounded-xl p-1 shadow-lg flex flex-col">
                            <div className="p-5 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-transparent to-white/[0.02]">
                                <h3 className="text-[var(--primary)] font-bold tracking-widest text-sm flex items-center gap-2">
                                    <span className="font-mono">[~]</span>
                                    SENTIMENT ANALYSIS V2.0
                                </h3>
                                <span className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded">
                                    BERT-LARGE
                                </span>
                            </div>

                            <div className="p-6 flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-1">
                                        Input Stream
                                    </label>
                                    <div className="relative group">
                                        <textarea
                                            className="w-full bg-[#0f1214] border border-gray-700 rounded-lg p-4 text-gray-200 font-mono text-sm min-h-[160px] resize-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] transition-all shadow-inner placeholder:text-gray-600"
                                            placeholder="Enter a sentence to analyze sentiment..."
                                            value={inputText}
                                            onChange={(e) => setInputText(e.target.value)}
                                        />
                                        <div className="absolute bottom-3 right-3 text-xs text-gray-600 font-mono">
                                            {inputText.length} chars
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg text-sm font-bold tracking-wide transition-colors border border-gray-700"
                                        onClick={() => setInputText("")}
                                    >
                                        Reset
                                    </button>
                                    <button
                                        className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg text-sm font-bold tracking-wide transition-colors border border-gray-700 flex items-center justify-center gap-2"
                                        onClick={handleRandomSample}
                                    >
                                        <Shuffle className="w-4 h-4" weight="bold" />
                                        Random
                                    </button>
                                </div>

                                <button
                                    className="w-full bg-[var(--primary)] hover:bg-[#33eaff] text-black h-12 rounded-lg text-sm font-bold tracking-[0.1em] transition-all shadow-[0_0_15px_rgba(0,225,255,0.3)] hover:shadow-[0_0_25px_rgba(0,225,255,0.5)] flex items-center justify-center gap-2 uppercase relative overflow-hidden group"
                                    onClick={handleRunInference}
                                    disabled={isRunning}
                                >
                                    <span className="relative z-10">{isRunning ? "Processing..." : "Run Inference"}</span>
                                    <Lightning className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" weight="fill" />
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>

                        {/* Prediction Dashboard */}
                        <motion.div
                            className="glass-panel rounded-xl p-6 relative overflow-hidden"
                            animate={isRunning ? { opacity: 0.7 } : { opacity: 1 }}
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)]" />

                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <h4 className="text-white font-bold text-lg tracking-tight">Real-time Prediction</h4>
                                    <p className="text-gray-500 text-xs font-mono mt-1">
                                        Inference Time: <span className="text-[var(--primary)]">42ms</span>
                                    </p>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse delay-75" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse delay-150" />
                                </div>
                            </div>

                            <div className="space-y-5">
                                {/* Positive */}
                                <div className="relative">
                                    <div className="flex justify-between text-xs font-bold tracking-wider mb-2">
                                        <span className="text-gray-300 font-mono">POSITIVE</span>
                                        <span className="text-[var(--primary)] font-mono">{predictions.positive}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gray-600 rounded-full relative"
                                            animate={{ width: `${predictions.positive}%` }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50" />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Neutral */}
                                <div className="relative">
                                    <div className="flex justify-between text-xs font-bold tracking-wider mb-2">
                                        <span className="text-gray-300 font-mono">NEUTRAL</span>
                                        <span className="text-[var(--secondary)] font-mono">{predictions.neutral}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden relative">
                                        <div className="absolute inset-0 bg-[var(--primary)]/5 animate-pulse" />
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full relative shadow-[0_0_10px_rgba(181,55,242,0.4)]"
                                            animate={{ width: `${predictions.neutral}%` }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-white" />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Negative */}
                                <div className="relative">
                                    <div className="flex justify-between text-xs font-bold tracking-wider mb-2">
                                        <span className="text-gray-300 font-mono">NEGATIVE</span>
                                        <span className="text-gray-400 font-mono">{predictions.negative}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gray-700 rounded-full"
                                            animate={{ width: `${predictions.negative}%` }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Pane: Code Lab */}
                    <div className="lg:col-span-7 h-full min-h-[500px] lg:min-h-0 relative group">
                        {/* Decorative Border Gradient */}
                        <div className="absolute -inset-[1px] bg-gradient-to-br from-[var(--primary)] via-transparent to-[var(--secondary)] rounded-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm" />

                        <div className="relative h-full bg-[#0E1112] rounded-xl overflow-hidden flex flex-col shadow-2xl border border-white/5">
                            {/* Terminal Header */}
                            <div className="bg-[#1A1D21] px-4 py-3 flex items-center justify-between border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#ff3b30] transition-colors" />
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#ffcc00] transition-colors" />
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-[#34c759] transition-colors" />
                                </div>
                                <div className="flex text-xs font-mono text-gray-500 select-none">
                                    <span>user@portfolio:~/projects/nlp</span>
                                </div>
                                <div className="text-gray-600 hover:text-white cursor-pointer transition-colors">
                                    <span className="text-sm font-mono">[=]</span>
                                </div>
                            </div>

                            {/* Code Tabs */}
                            <div className="flex bg-[#141719] border-b border-white/5">
                                <div className="px-6 py-2 bg-[#0E1112] text-[var(--primary)] text-xs font-mono border-t-2 border-[var(--primary)] flex items-center gap-2">
                                    <Code className="w-3.5 h-3.5" weight="bold" />
                                    inference.py
                                </div>
                                <div className="px-6 py-2 text-gray-500 hover:text-gray-300 cursor-pointer text-xs font-mono border-t-2 border-transparent flex items-center gap-2 transition-colors">
                                    <FileCode className="w-3.5 h-3.5" weight="bold" />
                                    config.json
                                </div>
                                <div className="px-6 py-2 text-gray-500 hover:text-gray-300 cursor-pointer text-xs font-mono border-t-2 border-transparent flex items-center gap-2 transition-colors">
                                    <Terminal className="w-3.5 h-3.5" weight="bold" />
                                    output.log
                                </div>
                            </div>

                            {/* Code Content */}
                            <div className="p-6 overflow-y-auto flex-grow font-mono text-sm leading-relaxed relative">
                                {/* Line Numbers */}
                                <div className="absolute left-0 top-6 bottom-0 w-12 text-right pr-4 text-gray-700 select-none">
                                    {codeContent.split("\n").map((_, i) => (
                                        <div key={i}>{i + 1}</div>
                                    ))}
                                </div>

                                {/* Code */}
                                <div className="pl-12">
                                    {codeContent.split("\n").map((line, i) => (
                                        <div key={i} className="whitespace-pre">
                                            {line.includes("import") || line.includes("from") || line.includes("def") || line.includes("with") || line.includes("for") || line.includes("if") || line.includes("return") ? (
                                                <span>
                                                    <span className="text-[var(--primary)]">
                                                        {line.split(" ")[0]}
                                                    </span>
                                                    <span className="text-white">
                                                        {" " + line.split(" ").slice(1).join(" ")}
                                                    </span>
                                                </span>
                                            ) : line.includes("#") ? (
                                                <span className="text-gray-500 italic">{line}</span>
                                            ) : line.includes('"""') ? (
                                                <span className="text-gray-500 italic">{line}</span>
                                            ) : line.includes("'") || line.includes('"') ? (
                                                <span>
                                                    {line.split(/(['"][^'"]*['"])/).map((part, j) =>
                                                        part.startsWith("'") || part.startsWith('"') ? (
                                                            <span key={j} className="text-[var(--secondary)]">{part}</span>
                                                        ) : (
                                                            <span key={j} className="text-white">{part}</span>
                                                        )
                                                    )}
                                                </span>
                                            ) : (
                                                <span className="text-white">{line}</span>
                                            )}
                                        </div>
                                    ))}
                                    <span className="inline-block w-2 h-5 bg-[var(--primary)] animate-pulse shadow-[0_0_8px_rgba(0,225,255,0.8)]" />
                                </div>
                            </div>

                            {/* Status Bar */}
                            <div className="bg-[#141719] px-4 py-1.5 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-500">
                                <div className="flex gap-4">
                                    <span className="flex items-center gap-1">
                                        <span className="text-[10px]">[*]</span> main
                                    </span>
                                    <span>UTF-8</span>
                                    <span>Python 3.9</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse" />
                                    <span>GPU: Active (CUDA)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="w-full text-center py-4 text-gray-600 text-xs font-mono mt-8">
                    <p>SYSTEM STATUS: <span className="text-green-500">ONLINE</span> // LATENCY: 24ms</p>
                </div>
            </div>
        </section>
    );
}
