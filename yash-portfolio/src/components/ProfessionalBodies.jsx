import { motion } from 'framer-motion';
import { Users, Mail, Calendar, Award } from 'lucide-react';
import { professionalBodies } from '../data/portfolio';

export default function ProfessionalBodies() {
    return (
        <section id="professional" className="py-20 bg-[#0d0d0d]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Professional Body/Cells/Clubs Memberships & Roles</h2>
                    <p className="text-gray-400 mt-6 mb-12 max-w-2xl">
                        CSI / ACM / IEEE / VN Cell / Research Cell / NSS / AS etc.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {professionalBodies.map((body, index) => (
                        <motion.div
                            key={body.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-yellow-500/10 rounded-xl group-hover:bg-yellow-500/20 transition-colors">
                                    <Users className="w-6 h-6 text-yellow-400" />
                                </div>
                                <span className="tag">{body.designation}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{body.name}</h3>
                            <p className="text-gray-400 text-sm mb-4">{body.chapter}</p>

                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                <Calendar className="w-4 h-4" />
                                <span>{body.duration}</span>
                            </div>

                            <div className="border-t border-yellow-500/10 pt-4">
                                <h4 className="text-sm font-medium text-yellow-400 mb-2">Activities Conducted or Participated In</h4>
                                <ul className="space-y-2">
                                    {body.activities.map((activity, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2" />
                                            {activity}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <motion.a
                                href={`mailto:yashgrathod19@gmail.com`}
                                whileHover={{ scale: 1.02 }}
                                className="mt-6 w-full flex items-center justify-center gap-2 py-3 bg-yellow-500/10 text-yellow-400 rounded-lg hover:bg-yellow-500/20 transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                Get in touch
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
