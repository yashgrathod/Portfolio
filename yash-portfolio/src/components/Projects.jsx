import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';

export default function Projects() {
    return (
        <section id="projects" className="pb-24 relative z-10" style={{ transform: 'translateY(-100px)', marginBottom: '-100px' }}>
            <div className="container mx-auto px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <h2 className="section-title mx-auto">Featured Projects</h2>
                    <p className="text-gray-400 mt-6 max-w-2xl text-center">
                        A selection of projects I've built, from full-stack applications to AI-powered tools
                    </p>
                </motion.div>

                {/* Spacer to force gap */}
                <div style={{ height: '25px' }}></div>

                {/* Projects Grid/Flex Layout for Centering */}
                <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card group hover:border-yellow-500/30 overflow-hidden flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] !p-0 rounded-3xl"
                        >
                            {/* Project Image */}
                            <div className="h-48 w-full bg-zinc-900/50 relative overflow-hidden group-hover:bg-zinc-900/70 transition-colors">
                                <img
                                    src={[
                                        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
                                        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png',
                                        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
                                        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
                                        'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=300&fit=crop'
                                    ][index % 5]}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60" />
                            </div>

                            {/* Content Container */}
                            <div className="flex flex-col flex-grow" style={{ padding: '20px' }}>
                                {/* Project Number & Title */}
                                <div className="flex items-start justify-between mb-8">
                                    <div>
                                        <span className="text-yellow-400/50 text-sm font-mono">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mt-1 group-hover:text-yellow-400 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-yellow-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 mb-8 leading-relaxed text-base">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-4" style={{ marginTop: '12px', marginBottom: '16px' }}>
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-medium text-yellow-400 bg-yellow-500/10 rounded-full border border-yellow-500/20"
                                            style={{ padding: '10px 20px' }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                                            <span className="text-yellow-400 mt-1">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            {/* Links Footer */}
                            <div className="mt-auto border-t border-yellow-500/10 flex gap-6" style={{ padding: '20px' }}>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link flex items-center gap-2 text-sm"
                                >
                                    <Github className="w-4 h-4" />
                                    View Code
                                </a>
                                {project.deployed && (
                                    <a
                                        href={project.demoUrl || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link flex items-center gap-2 text-sm"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div >
        </section >
    );
}
