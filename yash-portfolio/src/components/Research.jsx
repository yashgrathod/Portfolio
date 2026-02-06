import { motion } from 'framer-motion';
import { BookOpen, Mail, FileText, Microscope } from 'lucide-react';
import { research } from '../data/portfolio';

export default function Research() {
    return (
        <section id="research" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Research Work</h2>
                    <p className="text-gray-400 mt-6 mb-12 max-w-2xl">
                        Academic research papers, studies, and contributions to the field.
                    </p>
                </motion.div>

                <div className="grid gap-6">
                    {research.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-2xl flex items-center justify-center shrink-0">
                                    <Microscope className="w-8 h-8 text-yellow-400" />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>

                                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                                        <div className="bg-[#1f1f1f] rounded-lg p-4">
                                            <p className="text-yellow-400 text-sm font-medium mb-1">Area of Research</p>
                                            <p className="text-gray-300">{item.area}</p>
                                        </div>
                                        <div className="bg-[#1f1f1f] rounded-lg p-4">
                                            <p className="text-yellow-400 text-sm font-medium mb-1">Conference / Journal Details</p>
                                            <p className="text-gray-300">{item.conference}</p>
                                        </div>
                                    </div>

                                    <div className="bg-[#1f1f1f] rounded-lg p-4 mb-4">
                                        <p className="text-yellow-400 text-sm font-medium mb-2">Abstract or Summary</p>
                                        <p className="text-gray-300">{item.abstract}</p>
                                    </div>

                                    <div className="bg-[#1f1f1f] rounded-lg p-4 mb-6">
                                        <p className="text-yellow-400 text-sm font-medium mb-2">Your Contribution</p>
                                        <p className="text-gray-300 text-sm">(data collection, implementation, analysis, etc.)</p>
                                        <p className="text-gray-400 mt-2">{item.contribution}</p>
                                    </div>

                                    <a
                                        href="mailto:yashgrathod19@gmail.com"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500/10 text-yellow-400 rounded-lg hover:bg-yellow-500/20 transition-colors"
                                    >
                                        <Mail className="w-4 h-4" />
                                        Get in touch
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
