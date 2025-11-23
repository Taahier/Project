import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import data from '../data.json';
import { ExternalLink, Github, ArrowUpRight, X, Folder } from 'lucide-react';
import ParallaxSection from './animations/ParallaxSection';


const Projects = () => {
    const { projects } = data;

    // Combine all non-internship projects
    const allProjects = [
        ...(projects.web?.map(p => ({ ...p, category: 'Web Dev' })) || []),
        ...(projects.applications?.map(p => ({ ...p, category: 'Application' })) || []),
        ...(projects.cybersecurity_iot?.map(p => ({ ...p, category: 'Security & IoT' })) || [])
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20 bg-[var(--bg-primary)] relative min-h-screen flex flex-col">
            <ParallaxSection speed={0.35}>
                <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col relative z-10">
                    <SectionHeader title="Mission Log" subtitle="Projects & Work" />

                    {/* Original Experience Section */}
                    <div className="mb-20">
                        <h3 className="text-xl text-valorant-red font-header uppercase mb-6 flex items-center gap-4">
                            <span className="w-8 h-px bg-valorant-red"></span>
                            Professional Experience
                        </h3>
                        <div>
                            <div className="valorant-card-red group relative">
                                {/* Decorative Corners */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-black/50"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-black/50"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-black/50"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-black/50"></div>

                                <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-header font-bold pointer-events-none">EXP</div>
                                <div className="relative z-10">
                                    <h4 className="text-3xl font-header uppercase">{projects.internship.company}</h4>
                                    <p className="text-[var(--text-secondary)] font-body font-bold uppercase tracking-widest mb-4">{projects.internship.role}</p>
                                    <ul className="space-y-2 opacity-80">
                                        {projects.internship.description.map((desc, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-valorant-red mt-1.5 w-1.5 h-1.5 bg-valorant-red rotate-45 block"></span>
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Manifest List */}
                    <div>
                        <h3 className="text-xl text-valorant-red font-header uppercase mb-8 flex items-center gap-4">
                            <span className="w-8 h-px bg-valorant-red"></span>
                            Tactical Manifest
                        </h3>

                        <div className="flex flex-col">
                            {allProjects.map((project, index) => (
                                <ManifestItem
                                    key={index}
                                    project={project}
                                    index={index}
                                    onClick={() => setSelectedProject(project)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

const ManifestItem = ({ project, index, onClick }) => {
    return (
        <div
            className="group relative border-2 border-transparent hover:border-black dark:hover:border-white cursor-pointer overflow-hidden transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5 mb-2"
        >
            <div onClick={onClick} style={{ color: 'var(--text-primary)' }}>
                <div className="relative z-10 p-6 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        {/* Left: ID & Name */}
                        <div className="flex items-baseline gap-6 md:gap-12">
                            <span className="font-mono text-sm group-hover:text-valorant-red transition-colors" style={{ color: 'inherit' }}>
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-2xl md:text-4xl font-header uppercase group-hover:translate-x-4 transition-transform duration-300" style={{ color: 'inherit' }}>
                                {project.name}
                            </h3>
                        </div>

                        {/* Right: Category */}
                        <span className="hidden md:block font-mono text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: 'inherit' }}>
                            [{project.category}]
                        </span>
                    </div>

                    {/* Expandable Description Preview */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                        <div className="overflow-hidden">
                            <div className="pt-4 md:pl-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                <p className="text-sm max-w-2xl line-clamp-2" style={{ color: 'inherit' }}>
                                    {project.description}
                                </p>
                                <p className="text-valorant-red text-xs font-mono mt-2 uppercase tracking-wider">
                                    Click to view full mission details &gt;&gt;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectModal = ({ project, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full max-w-5xl bg-[var(--bg-primary)] border-2 border-black dark:border-white overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white hover:bg-valorant-red hover:text-white transition-colors rounded-full backdrop-blur-sm"
                >
                    <X size={20} />
                </button>

                {/* Image Section (Left/Top) */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                            <Folder size={64} className="text-white/10" />
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] md:from-transparent md:bg-gradient-to-r md:to-[var(--bg-primary)] opacity-90" />
                </div>

                {/* Details Section (Right/Bottom) */}
                <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto" style={{ color: 'var(--text-primary)' }}>
                    <span className="font-mono text-xs text-valorant-red uppercase mb-2 block">
                        // {project.category}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-header uppercase mb-6 leading-none" style={{ color: 'inherit' }}>
                        {project.name}
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-sm font-mono uppercase mb-2" style={{ color: 'inherit' }}>Mission Brief</h4>
                            <p className="leading-relaxed" style={{ color: 'inherit' }}>
                                {project.description}
                            </p>
                        </div>

                        <div>
                            <h4 className="text-sm font-mono uppercase mb-2" style={{ color: 'inherit' }}>Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech && project.tech.map((t, i) => (
                                    <span key={i} className="text-xs font-mono px-2 py-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10" style={{ color: 'inherit' }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-[var(--border-primary)] flex gap-4">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-3 bg-black dark:bg-white text-white dark:text-black font-header uppercase text-center hover:bg-valorant-red hover:text-white transition-colors flex items-center justify-center gap-2"
                                >
                                    <Github size={18} /> View Code
                                </a>
                            )}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-3 border border-black/20 dark:border-white/20 text-black dark:text-white font-header uppercase text-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center justify-center gap-2"
                                >
                                    <ArrowUpRight size={18} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;
