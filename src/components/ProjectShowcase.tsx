"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        id: 1,
        title: "Autonomous RAG Agent",
        description: "Self-correcting retrieval system utilizing LangChain graph logic and vector embeddings for high-fidelity Q&A.",
        techStack: ["LangChain", "Pinecone", "GPT-4"],
        status: "Live" as const,
        statusColor: "#00e1ff",
        accentColor: "#00e1ff",
        category: "llm",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        codePreview: `{
  "agent_type": "recursive_retriever",
  "embedding_model": "text-embedding-3",
  "vector_store": "pinecone_serverless",
  "logic_flow": [
    "query_analysis",
    "multi_query_expansion",
    "reciprocal_rank_fusion"
  ]
}`,
        actionLabel: "View Repository",
        actionIcon: "github" as const,
    },
    {
        id: 2,
        title: "YOLOv8 Real-Time",
        description: "Optimized computer vision pipeline for edge devices achieving 60fps on Jetson Nano.",
        techStack: ["PyTorch", "OpenCV", "CUDA"],
        status: "Research" as const,
        statusColor: "#B537F2",
        accentColor: "#B537F2",
        category: "vision",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
        codePreview: `def predict(frame):
    results = model(frame, stream=True)
    for r in results:
        boxes = r.boxes
        for box in boxes:
            x1, y1, x2, y2 = box.xyxy[0]
            confidence = math.ceil(box.conf[0]*100)
            cls = int(box.cls[0])
            cv2.rectangle(img, (x1, y1), ...)`,
        actionLabel: "View Demo",
        actionIcon: "play" as const,
    },
    {
        id: 3,
        title: "Neuro-Audio Synth",
        description: "Generative Adversarial Network (GAN) for synthesizing lo-fi instrumental tracks from text prompts.",
        techStack: ["TensorFlow", "Keras", "NumPy"],
        status: "Beta" as const,
        statusColor: "#3B82F6",
        accentColor: "#3B82F6",
        category: "generative",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
        codePreview: `class Generator(nn.Module):
    def __init__(self, latent_dim):
        super().__init__()
        self.fc = nn.Linear(latent_dim, 256)
        self.conv1 = nn.ConvTranspose1d(...)
        
    def forward(self, z):
        x = F.relu(self.fc(z))
        return self.conv1(x)`,
        actionLabel: "Listen",
        actionIcon: "play" as const,
    },
    {
        id: 4,
        title: "Market LSTM",
        description: "Long Short-Term Memory network analyzing 10 years of S&P 500 data to predict micro-trends.",
        techStack: ["Pandas", "Scikit-Learn", "Keras"],
        status: "Live" as const,
        statusColor: "#00e1ff",
        accentColor: "#00e1ff",
        category: "ml",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
        codePreview: `Epoch 98/100
140/140 [===] - 2s 15ms/step 
loss: 0.0021 - val_loss: 0.0018

Epoch 99/100
140/140 [===] - 2s 14ms/step
loss: 0.0019 - val_loss: 0.0017

>> Training Complete.
>> Model saved to /models/lstm_v2.h5`,
        actionLabel: "Read Case Study",
        actionIcon: "link" as const,
    },
    {
        id: 5,
        title: "U-Net Segmentation",
        description: "Biomedical image analysis model identifying tumor regions in MRI scans with 98% dice coefficient.",
        techStack: ["TensorFlow", "SciPy", "U-Net"],
        status: "Research" as const,
        statusColor: "#B537F2",
        accentColor: "#B537F2",
        category: "vision",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
        codePreview: `model = unet_model(
    input_shape=(256, 256, 1),
    n_filters=64,
    n_classes=2,
    dropout=0.3
)

model.compile(
    optimizer='adam',
    loss='dice_loss',
    metrics=['accuracy', 'dice_coef']
)`,
        actionLabel: "Paper",
        actionIcon: "link" as const,
    },
    {
        id: 6,
        title: "RoBERTa Sentiment",
        description: "Fine-tuned transformer model for real-time social media sentiment tracking and crisis detection.",
        techStack: ["HuggingFace", "FastAPI", "Redis"],
        status: "Live" as const,
        statusColor: "#00e1ff",
        accentColor: "#00e1ff",
        category: "llm",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
        codePreview: `model:
  base: "cardiffnlp/twitter-roberta-base"
  max_seq_len: 512
  classes: ["negative", "neutral", "positive"]

server:
  workers: 4
  batch_size: 16
  cache_ttl: 3600`,
        actionLabel: "Live Dashboard",
        actionIcon: "link" as const,
    },
];

const categories = [
    { id: "all", label: "ALL SYSTEMS" },
    { id: "vision", label: "VISION" },
    { id: "llm", label: "LLM AGENTS" },
    { id: "ml", label: "PREDICTIVE ML" },
    { id: "generative", label: "GENERATIVE" },
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
                            <span className="text-xs font-mono tracking-widest uppercase">System Status: Online</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
                            Deployed Models
                            <br />
                            <span className="text-white/40">& Research</span>
                        </h2>
                        <p className="text-[#9ab8bc] max-w-lg mt-2 text-sm md:text-base">
                            Explore the neural grid. Hover over data nodes to inspect architecture and inference logic.
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
                            System Status: Optimal
                        </span>
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#9ab8bc]">
                        {filteredProjects.length} Projects Loaded
                    </span>
                </div>
            </div>
        </section>
    );
}
