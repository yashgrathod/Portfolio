import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Heart } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="py-20 bg-[#0a0a0a] border-t border-yellow-500/10" style={{ padding: '20px 0' }}>
            <div className="w-full px-8">
                <div className="w-full flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Let's Work Together
                        </h2>
                        <p className="text-gray-400 text-lg max-w-lg mx-auto text-center" style={{ lineHeight: '1.8', marginBottom: '15px' }}>
                            I'm always open to discussing new projects, creative ideas, or opportunities.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex justify-center" style={{ marginBottom: '15px' }}
                    >
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex items-center gap-3 bg-black text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400/10 transition-all hover:scale-105" style={{ padding: '8px 16px', border: '2px solid #facc15' }}
                        >
                            <Mail className="w-5 h-5" />
                            {profile.email}
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center gap-6 mb-16"
                    >
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 transition-all"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 transition-all"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href={`mailto:${profile.email}`}
                            className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 transition-all"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </motion.div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" style={{ marginTop: '20px', marginBottom: '20px' }} />

                    <div className="flex flex-col md:flex-row items-center justify-center text-gray-500 text-sm" style={{ gap: '40px' }}>
                        <p className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            Mumbai, India
                        </p>
                        <p className="flex items-center gap-1">
                            Made with <Heart className="w-4 h-4 text-red-500" /> by Yash Rathod
                        </p>
                        <p>© {currentYear} All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
