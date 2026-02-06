import { motion } from 'framer-motion';
import { Trophy, Calendar, Target, Award, Mail } from 'lucide-react';
import { hackathons } from '../data/portfolio';

const statusColors = {
    "Shortlisted": "text-green-400 bg-green-500/10 border-green-500/20",
    "Qualified": "text-blue-400 bg-blue-500/10 border-blue-500/20",
    "Participated": "text-purple-400 bg-purple-500/10 border-purple-500/20",
    "Winner": "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
};

export default function Hackathons() {
    return (
        <section id="hackathons" className="py-20 bg-[#0d0d0d] relative z-10" style={{ transform: 'translateY(-140px)', marginBottom: '-140px' }}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    <h2 className="section-title">Hackathons</h2>
                    <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-center" style={{ marginBottom: '25px' }}>
                        Competitive programming and hackathon participation showcasing problem-solving abilities.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hackathons.map((hackathon, index) => (
                        <motion.div
                            key={hackathon.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-card relative overflow-hidden group" style={{ padding: '40px' }}
                        >
                            {/* Trophy Icon */}
                            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Trophy className="w-20 h-20 text-yellow-400" />
                            </div>

                            <div className="relative">
                                <div className="flex items-center gap-2" style={{ marginBottom: '12px' }}>
                                    <Trophy className="w-6 h-6 text-yellow-400" />
                                    <span className={`rounded-full text-sm font-medium border ${statusColors[hackathon.status] || statusColors["Participated"]}`} style={{ padding: '6px 7px' }}>
                                        {hackathon.status}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-white pr-12" style={{ marginBottom: '10px' }}>{hackathon.name}</h3>

                                <div className="flex items-center gap-2 text-gray-400 text-sm" style={{ marginBottom: '16px' }}>
                                    <Calendar className="w-4 h-4" />
                                    <span>{hackathon.date}</span>
                                </div>

                                <div className="bg-[#1f1f1f] rounded-lg" style={{ padding: '16px', marginBottom: '16px' }}>
                                    <div className="flex items-start gap-2">
                                        <Target className="w-4 h-4 text-yellow-400 mt-1 shrink-0" />
                                        <div>
                                            <p className="text-yellow-400 font-medium mb-2" style={{ fontSize: '14px' }}>Problem Statement</p>
                                            <p className="text-gray-300" style={{ fontSize: '14px' }}>{hackathon.problemStatement}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2" style={{ marginBottom: '16px' }}>
                                    <Award className="w-4 h-4 text-green-400 mt-1 shrink-0" />
                                    <p className="text-gray-300 text-sm">{hackathon.achievement}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
