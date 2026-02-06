import { motion } from 'framer-motion';
import { Award, ExternalLink, Mail } from 'lucide-react';
import { certifications } from '../data/portfolio';

export default function Certifications() {
    return (
        <section id="certifications" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Certification Courses</h2>
                    <p className="text-gray-400 mt-6 mb-12 max-w-2xl">
                        NPTEL, Coursera, Spoken Tutorial and other professional certifications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-card p-6 group cursor-pointer"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-xl flex items-center justify-center group-hover:from-yellow-400/30 group-hover:to-yellow-600/20 transition-all">
                                    <Award className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                                    <p className="text-yellow-400 text-sm">{cert.platform}</p>
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm mb-6">
                                {cert.description}
                            </p>

                            <div className="flex gap-3">
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#1f1f1f] text-gray-300 rounded-lg hover:bg-yellow-500/10 hover:text-yellow-400 transition-colors">
                                    <ExternalLink className="w-4 h-4" />
                                    View
                                </button>
                                <a
                                    href="mailto:yashgrathod19@gmail.com"
                                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-yellow-500/10 text-yellow-400 rounded-lg hover:bg-yellow-500/20 transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    Contact
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <a
                        href="mailto:yashgrathod19@gmail.com"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400/10 text-yellow-400 rounded-lg hover:bg-yellow-400/20 transition-colors border border-yellow-400/20"
                    >
                        <Mail className="w-5 h-5" />
                        Get in touch for certificate verification
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
