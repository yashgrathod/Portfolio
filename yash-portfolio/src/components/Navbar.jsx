import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Linkedin, Github } from 'lucide-react';
import { profile } from '../data/portfolio';

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (href) => {
        setActiveSection(href.replace('#', ''));
        setIsOpen(false);

        if (href === '#contact') {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            return;
        }

        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToFooter = () => {
        setIsOpen(false);
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-yellow-500/10'
                    : 'bg-[#0a0a0a]/50 backdrop-blur-sm border-b border-white/5'
                    }`}
                style={{ padding: scrolled ? '12px 16px' : '16px 16px' }}
            >
                <div className="container mx-auto px-4">
                    <div className="hidden md:grid grid-cols-3 items-center">
                        <div></div>

                        <div className="flex items-center justify-center gap-6 lg:gap-12">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.href.replace('#', '');
                                return (
                                    <button
                                        key={item.name}
                                        onClick={() => handleClick(item.href)}
                                        className={`relative px-2 py-2 text-base font-medium transition-all duration-300 ${isActive
                                            ? 'text-yellow-400'
                                            : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeIndicator"
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 rounded-full"
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="flex items-center justify-end gap-3 pr-4">
                            <span className="hidden lg:inline text-base font-medium text-gray-400 mr-2">Contact</span>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 hover:bg-yellow-500/20 hover:scale-110 transition-all"
                                title="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 hover:bg-yellow-500/20 hover:scale-110 transition-all"
                                title="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href={`mailto:${profile.email}`}
                                className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 hover:bg-yellow-500/20 hover:scale-110 transition-all"
                                title="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden flex justify-end">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-3 rounded-xl bg-yellow-500/10 text-yellow-400"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
                        />

                        <motion.nav
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ type: 'tween', duration: 0.2 }}
                            className="fixed top-0 left-0 right-0 bg-[#0a0a0a] border-b border-yellow-500/20 z-50 md:hidden"
                        >
                            <div style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '60px', paddingBottom: '24px' }}>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-6 right-6 p-3 rounded-xl bg-yellow-500/10 text-yellow-400"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="flex flex-col gap-4 mb-12 ml-4">
                                    {navItems.map((item) => {
                                        const isActive = activeSection === item.href.replace('#', '');
                                        return (
                                            <button
                                                key={item.name}
                                                onClick={() => handleClick(item.href)}
                                                className={`w-full text-left px-6 py-4 rounded-xl text-lg font-medium transition-all ${isActive
                                                    ? 'text-yellow-400 bg-yellow-500/10'
                                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                                    }`}
                                            >
                                                {item.name}
                                            </button>
                                        );
                                    })}
                                </div>

                                <div style={{ marginTop: '30px', paddingTop: '24px', borderTop: '1px solid rgba(234, 179, 8, 0.1)' }}>
                                    <div className="flex gap-6 px-2 ml-4">
                                        <a
                                            href={profile.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={profile.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={`mailto:${profile.email}`}
                                            className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400"
                                        >
                                            <Mail className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.nav>
                    </>
                )
                }
            </AnimatePresence >
        </>
    );
}
