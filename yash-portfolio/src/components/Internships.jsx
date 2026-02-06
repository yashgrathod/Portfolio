import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Mail } from 'lucide-react';
import { internships } from '../data/portfolio';

export default function Internships() {
    return (
        <section id="internships" className="py-20 relative z-20" style={{ transform: 'translateY(-100px)', marginBottom: '-100px' }}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    <h2 className="section-title">Internships</h2>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-center" style={{ marginBottom: '25px' }}>
                        Professional experience and industry exposure through internship opportunities.
                    </p>
                </motion.div>

                <div className="space-y-8" style={{ paddingBottom: '40px' }}>
                    {internships.map((internship, index) => (
                        <motion.div
                            key={internship.company}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card p-8 relative" style={{ borderRadius: '20px', overflow: 'visible' }}
                        >

                            {/* Decorative Element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-500/10 to-transparent rounded-bl-full" />

                            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                {/* Icon */}
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-2xl flex items-center justify-center shrink-0">
                                    <Briefcase className="w-8 h-8 text-yellow-400" />
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">{internship.company}</h3>
                                            <p className="text-yellow-400">{internship.organization}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2" style={{ position: 'relative', zIndex: 100 }}>
                                            <span className="tag flex items-center justify-center" style={{ backgroundColor: '#2a2a1a' }}>{internship.role}</span>
                                            <span className="w-14 h-14 bg-green-500/10 text-green-400 rounded-full text-xs border border-green-500/20 flex items-center justify-center">
                                                {internship.mode}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                                        <Calendar className="w-4 h-4" />
                                        <span>{internship.duration}</span>
                                    </div>

                                    <p className="text-gray-300 mb-6">{internship.description}</p>

                                    <div className="bg-[#1f1f1f] rounded-xl p-4">
                                        <h4 className="text-yellow-400 font-medium mb-3">Key Learnings:</h4>
                                        <ul className="space-y-2">
                                            {internship.learnings.map((learning, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                                    <span>{learning}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
