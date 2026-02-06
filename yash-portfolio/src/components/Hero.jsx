import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ChevronDown } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Hero() {
    const scrollToJourney = () => {
        document.querySelector('#journey')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-x-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl" />
            </div>

            <div className="w-full max-w-4xl mx-4 md:mx-8 relative z-10">
                <div className="glass-card p-12 md:p-20 flex flex-col items-center text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-yellow-400 text-lg mb-4"
                    >
                        Hello, I'm
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-6xl md:text-8xl font-bold"
                        style={{ marginBottom: '10px' }}
                    >
                        <span className="text-white">{profile.name.split(' ')[0]}</span>{' '}
                        <span className="gradient-text">{profile.name.split(' ')[1]}</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-gray-400"
                        style={{ marginBottom: '25px' }}
                    >
                        {profile.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
                        style={{ marginBottom: '25px' }}
                    >
                        {profile.about}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="inline-flex items-center bg-white/5 border border-white/10 rounded-2xl"
                        style={{ marginBottom: '25px', padding: '5px 25px', gap: '25px' }}
                    >
                        <div className="text-left">
                            <p className="text-white font-semibold text-lg">{profile.education.college}</p>
                            <p className="text-gray-400 text-sm mt-1">{profile.education.degree}</p>
                        </div>
                        <div className="w-px h-12 bg-yellow-500/30" />
                        <div className="text-center px-2">
                            <p className="text-yellow-400 font-bold text-3xl">{profile.education.cgpa}</p>
                            <p className="text-gray-400 text-xs mt-1">CGPA</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex justify-center gap-5"
                        style={{ marginBottom: '25px' }}
                    >
                        <a
                            href={`mailto:${profile.email}`}
                            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 hover:bg-yellow-500/20 hover:border-yellow-500/30 hover:scale-110 transition-all"
                            title="Email Me"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 hover:bg-yellow-500/20 hover:border-yellow-500/30 hover:scale-110 transition-all"
                            title="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 hover:bg-yellow-500/20 hover:border-yellow-500/30 hover:scale-110 transition-all"
                            title="GitHub"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex justify-center gap-8 md:gap-16"
                    >
                        {[
                            { value: '4+', label: 'Projects' },
                            { value: '3+', label: 'Hackathons' },
                            { value: '1', label: 'Internship' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-3xl md:text-4xl font-bold text-yellow-400">{stat.value}</p>
                                <p className="text-gray-400 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
