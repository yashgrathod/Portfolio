import { motion } from 'framer-motion';
import { BookOpen, Calendar, User, Lightbulb, Mail } from 'lucide-react';
import { workshops } from '../data/portfolio';

export default function Workshops() {
    return (
        <section id="workshops" className="py-20 bg-[#0d0d0d]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Workshops / Training Programs</h2>
                    <p className="text-gray-400 mt-6 mb-12 max-w-2xl">
                        Training programs attended, volunteered for, and conducted.
                    </p>
                </motion.div>

                {workshops.map((category, catIndex) => (
                    <div key={category.category} className="mb-12">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xl font-bold text-yellow-400 mb-6 flex items-center gap-2"
                        >
                            <BookOpen className="w-5 h-5" />
                            {category.category}
                        </motion.h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            {category.items.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-card p-6"
                                >
                                    <h4 className="text-xl font-bold text-white mb-4">{item.name}</h4>

                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-center gap-3 text-gray-400">
                                            <User className="w-4 h-4 text-yellow-400" />
                                            <span>Organized By: {item.organizer}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-400">
                                            <Calendar className="w-4 h-4 text-yellow-400" />
                                            <span>Duration: {item.duration}</span>
                                        </div>
                                    </div>

                                    <div className="bg-[#1f1f1f] rounded-lg p-4">
                                        <div className="flex items-start gap-2">
                                            <Lightbulb className="w-5 h-5 text-yellow-400 mt-0.5" />
                                            <div>
                                                <span className="text-yellow-400 font-medium text-sm">Key Takeaways:</span>
                                                <p className="text-gray-300 text-sm mt-1">{item.keyTakeaways}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <a
                                        href="mailto:yashgrathod19@gmail.com"
                                        className="mt-4 w-full flex items-center justify-center gap-2 py-3 bg-yellow-500/10 text-yellow-400 rounded-lg hover:bg-yellow-500/20 transition-colors"
                                    >
                                        <Mail className="w-4 h-4" />
                                        Get in touch
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
