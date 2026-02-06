import { motion } from 'framer-motion';
import { Code, Wrench, Brain, Sparkles } from 'lucide-react';
import { skills } from '../data/portfolio';
import {
    DiPython,
    DiJavascript1,
    DiHtml5,
    DiCss3,
    DiMysql,
    DiVisualstudio,
    DiGithubBadge,
    DiNodejsSmall
} from 'react-icons/di';
import { SiCplusplus, SiFigma, SiTensorflow, SiJira, SiCanva } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const LanguageIcons = {
    'Python': DiPython,
    'JavaScript': DiJavascript1,
    'C/C++': SiCplusplus,
    'HTML5': DiHtml5,
    'CSS3': DiCss3,
    'SQL': DiMysql
};

const ToolIcons = {
    'VS Code': DiVisualstudio,
    'Git & GitHub': DiGithubBadge,
    'Figma': SiFigma,
    'Canva': SiCanva,
    'Jira': SiJira,
    'AWS': FaAws,
    'TensorFlow': SiTensorflow,
    'Node.js': DiNodejsSmall
};

export default function Skills() {
    const duplicatedLanguages = [...skills.technical, ...skills.technical, ...skills.technical, ...skills.technical];
    const duplicatedTools = [...skills.tools, ...skills.tools, ...skills.tools, ...skills.tools];

    return (
        <section id="skills" className="pt-24 pb-0 relative">
            <div className="container mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title mx-auto">Skills & Expertise</h2>
                    <p className="text-gray-400 mt-8 mb-12 w-full text-center">
                        Technologies I work with and areas I'm passionate about
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                            <Code className="w-5 h-5 text-yellow-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white">Languages</h3>
                    </div>
                    <div className="marquee-container py-4">
                        <div className="flex gap-6 marquee-left" style={{ width: 'max-content' }}>
                            {duplicatedLanguages.map((skill, index) => {
                                const IconComponent = LanguageIcons[skill.name];
                                return (
                                    <div
                                        key={`lang-${skill.name}-${index}`}
                                        className="flex items-center gap-3 px-6 py-3 glass-card bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-xl whitespace-nowrap"
                                    >
                                        {IconComponent ? <IconComponent className="w-6 h-6 text-yellow-400" /> : <span className="text-2xl">💡</span>}
                                        <span className="text-white font-medium">{skill.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mb-28 pt-8"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                            <Wrench className="w-5 h-5 text-yellow-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white">Tools</h3>
                    </div>
                    <div className="marquee-container py-4">
                        <div className="flex gap-6 marquee-right" style={{ width: 'max-content' }}>
                            {duplicatedTools.map((tool, index) => {
                                const IconComponent = ToolIcons[tool];
                                return (
                                    <div
                                        key={`tool-${tool}-${index}`}
                                        className="flex items-center gap-3 px-6 py-3 glass-card bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-xl whitespace-nowrap"
                                    >
                                        {IconComponent ? <IconComponent className="w-6 h-6 text-yellow-400" /> : <span className="text-2xl">🔧</span>}
                                        <span className="text-white font-medium">{tool}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10" style={{ marginTop: '4rem' }}>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 gap-8 h-full flex flex-col justify-between"
                    >
                        <div style={{ marginBottom: '25px' }}>
                            <div className="flex items-center gap-3" style={{ marginBottom: '15px' }}>
                                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                                    <Brain className="w-5 h-5 text-yellow-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Soft Skills</h3>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                {skills.softSkills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm text-gray-300 bg-zinc-800 border border-gray-600 rounded-lg hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-colors cursor-pointer"
                                        style={{ padding: '5px' }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-3" style={{ marginBottom: '15px' }}>
                                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                                    <Sparkles className="w-5 h-5 text-yellow-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Interests</h3>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                {skills.learningInterests.map((interest) => (
                                    <span
                                        key={interest}
                                        className="text-sm text-gray-300 bg-zinc-800 border border-gray-600 rounded-lg hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-colors cursor-pointer"
                                        style={{ padding: '5px' }}
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-card p-10 h-full flex flex-col"
                    >
                        <div className="flex items-center gap-3" style={{ marginBottom: '15px' }}>
                            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                                <Code className="w-5 h-5 text-yellow-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white">Relevant Coursework</h3>
                        </div>
                        <div className="flex flex-wrap gap-4 flex-grow content-between">
                            {skills.relevantCourses.map((course) => (
                                <span
                                    key={course}
                                    className="text-sm text-gray-300 bg-zinc-800 border border-gray-600 rounded-lg hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-colors cursor-pointer"
                                    style={{ padding: '5px' }}
                                >
                                    {course}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
