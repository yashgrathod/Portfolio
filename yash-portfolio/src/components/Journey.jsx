import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Trophy, Code, Award, Rocket } from 'lucide-react';

const journeyItems = [
    {
        year: "2023",
        title: "Started B.Tech in Computer Engineering",
        description: "Began my journey at Mumbai University",
        icon: GraduationCap,
        type: "education"
    },
    {
        year: "2024",
        title: "Google AI-ML Virtual Internship",
        description: "Completed mentor-guided AI/ML program covering supervised learning and neural networks",
        icon: Briefcase,
        type: "work"
    },
    {
        year: "2024",
        title: "Smart India Hackathon",
        description: "Qualified through internal Software Category hackathon round",
        icon: Trophy,
        type: "achievement"
    },
    {
        year: "2024",
        title: "CSI Membership",
        description: "Joined Computer Society of India at SAKEC chapter",
        icon: Award,
        type: "milestone"
    },
    {
        year: "2024",
        title: "Built Multiple Projects",
        description: "Scrap Management System, Video Streaming Platform, AI Object Recognizer",
        icon: Code,
        type: "project"
    },
    {
        year: "2025",
        title: "Deepblue Hackathon",
        description: "Shortlisted for project development - Bridging Communication Gaps",
        icon: Rocket,
        type: "achievement"
    }
];

const typeColors = {
    education: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
    work: "from-green-500/20 to-green-600/10 border-green-500/30",
    achievement: "from-yellow-500/20 to-yellow-600/10 border-yellow-500/30",
    milestone: "from-purple-500/20 to-purple-600/10 border-purple-500/30",
    project: "from-orange-500/20 to-orange-600/10 border-orange-500/30"
};

const iconColors = {
    education: "text-blue-400",
    work: "text-green-400",
    achievement: "text-yellow-400",
    milestone: "text-purple-400",
    project: "text-orange-400"
};

export default function Journey() {
    return (
        <section id="journey" className="-mt-40 pb-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl" />

            <div className="w-full flex flex-col items-center px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-4"
                >
                    <h2 className="section-title mx-auto">My Journey</h2>
                    <p className="text-gray-400 mt-8 max-w-2xl mx-auto" style={{ marginBottom: '10px' }}>
                        A timeline of my educational and professional milestones
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto flex flex-col items-center">
                    {/* Center line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-500/50 hidden md:block z-20" />

                    <div className="space-y-8 md:space-y-12 w-full">
                        {journeyItems.map((item, index) => {
                            const Icon = item.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Content */}
                                    <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                        <div className={`glass-card p-8 bg-gradient-to-br ${typeColors[item.type]} inline-block w-full`}>
                                            <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                                                <div className={`w-12 h-12 rounded-xl bg-black/30 flex items-center justify-center ${iconColors[item.type]}`}>
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                                <div className={isLeft ? 'md:text-right' : ''}>
                                                    <span className="text-yellow-400 font-bold text-lg">{item.year}</span>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-gray-400">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Center dot */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full hidden md:block z-10">
                                        <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-20" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
