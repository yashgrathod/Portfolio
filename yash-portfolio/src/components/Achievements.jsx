import { motion } from 'framer-motion';
import { Trophy, Cloud, Star, Award, Zap } from 'lucide-react';
import { achievements } from '../data/portfolio';

const iconMap = {
    trophy: Trophy,
    cloud: Cloud,
    star: Star,
    award: Award
};

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 relative z-10" style={{ transform: 'translateY(-100px)', marginBottom: '-100px' }}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    <h2 className="section-title">Achievements</h2>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-center" style={{ marginBottom: '25px' }}>
                        Recognition, accomplishments, and milestones achieved throughout my journey.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => {
                        const Icon = iconMap[achievement.icon] || Star;

                        return (
                            <motion.div
                                key={achievement.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card flex items-center gap-6 group" style={{ padding: '32px' }}
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:from-yellow-400/30 group-hover:to-yellow-600/20 transition-all">
                                    <Icon className="w-10 h-10 text-yellow-400" />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-yellow-400 text-sm mb-2">{achievement.platform}</p>
                                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6" style={{ marginTop: '24px' }}
                >
                    {[
                        { label: "Projects", value: "4+" },
                        { label: "Hackathons", value: "3+" },
                        { label: "CGPA", value: "9.29" },
                        { label: "Internships", value: "1" }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card text-center" style={{ padding: '32px' }}
                        >
                            <p className="text-3xl font-bold gradient-text mb-2">{stat.value}</p>
                            <p className="text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
}
