"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        id: 1,
        title: "D.A.S.H",
        description: "Data Analysis System Hub - A branch-level analytics platform enabling natural language queries on transaction data with AI-powered insights.",
        techStack: ["FastAPI", "React", "LangChain", "GPT-4", "FAISS"],
        status: "Live" as const,
        statusColor: "#00e1ff",
        accentColor: "#00e1ff",
        category: "analytics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        codePreview: `# LangChain Agent Setup
agent = create_react_agent(
    llm=ChatOpenAI(model="gpt-4"),
    tools=[
        query_data_tool,
        visualization_tool,
        rag_retriever
    ],
    prompt=analysis_prompt
)

# Natural Language Query
response = agent.invoke({
    "input": user_query,
    "branch": current_branch
})`,
        actionLabel: "View Project",
        actionIcon: "github" as const,
    },
    {
        id: 2,
        title: "WaveFix",
        description: "AI-powered Tech Support Agent using RAG architecture to provide automated technical support from uploaded PDF documentation.",
        techStack: ["React", "FastAPI", "LangChain", "OpenAI", "SQLite"],
        status: "Live" as const,
        statusColor: "#00e1ff",
        accentColor: "#B537F2",
        category: "rag",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
        codePreview: `# RAG Pipeline
vectorstore = FAISS.from_documents(
    documents=pdf_chunks,
    embedding=OpenAIEmbeddings()
)

retriever = vectorstore.as_retriever(
    search_kwargs={"k": 4}
)

chain = RetrievalQA.from_chain_type(
    llm=ChatOpenAI(model="gpt-4"),
    retriever=retriever
)`,
        actionLabel: "View Demo",
        actionIcon: "play" as const,
    },
    {
        id: 3,
        title: "Ticket Forecasting",
        description: "ML-powered forecasting system using Prophet with custom event handling and adaptive correction to predict daily ticket volumes with high accuracy.",
        techStack: ["Prophet", "FastAPI", "React", "Pandas", "Recharts"],
        status: "Live" as const,
        statusColor: "#00e1ff",
        accentColor: "#3B82F6",
        category: "forecasting",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        codePreview: `# Prophet Model with Custom Regressors
model = Prophet(
    changepoint_prior_scale=0.15,
    yearly_seasonality=True,
    weekly_seasonality=True
)

# Add Ramadan regressor
model.add_regressor('ramadan_effect')

# Adaptive Rolling Correction
correction_factor = calculate_rolling_factor(
    actuals, predictions, window=30
)`,
        actionLabel: "View Details",
        actionIcon: "link" as const,
    },
];

const categories = [
    { id: "all", label: "ALL PROJECTS" },
    { id: "analytics", label: "ANALYTICS" },
    { id: "rag", label: "RAG SYSTEMS" },
    { id: "forecasting", label: "FORECASTING" },
];

export default function ProjectShowcase() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="projects" className="relative py-20 px-6 lg:px-20">
            {/* Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)] z-0 pointer-events-none" />

            <div className="relative z-10 max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#27383a] pb-8 mb-10">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-[var(--primary)]/60 mb-2">
                            <span className="text-sm">&#128187;</span>
                            <span className="text-xs font-mono tracking-widest uppercase">Featured Work</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
                            Projects
                            <br />
                            <span className="text-white/40">& Systems</span>
                        </h2>
                        <p className="text-[#9ab8bc] max-w-lg mt-2 text-sm md:text-base">
                            Full-stack AI applications built with modern technologies. Hover to explore the architecture.
                        </p>
                    </div>

                    {/* Filter Chips */}
                    <div className="flex flex-wrap gap-2 p-1.5 bg-[#1a2325]/80 backdrop-blur rounded-full border border-[#27383a]">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`
                  px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all
                  ${activeCategory === cat.id
                                        ? "bg-[var(--primary)] text-[var(--background)] shadow-[0_0_15px_rgba(0,225,255,0.3)]"
                                        : "hover:bg-white/5 text-white/70 hover:text-white"
                                    }
                `}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                    layout
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            layout
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Status Footer */}
                <div className="flex items-center justify-between py-6 border-t border-[#27383a] mt-10">
                    <div className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-ping" />
                        <span className="text-xs font-mono uppercase tracking-widest text-[#9ab8bc]">
                            All Systems Operational
                        </span>
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#9ab8bc]">
                        {filteredProjects.length} Projects
                    </span>
                </div>
            </div>
        </section>
    );
}
