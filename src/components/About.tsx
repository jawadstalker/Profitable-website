import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Frontend Developer',
      description: 'Specialized in building modern, responsive web applications with React.js and cutting-edge technologies.',
    },
    {
      icon: Sparkles,
      title: 'AI Enthusiast',
      description: 'Passionate about exploring artificial intelligence and integrating intelligent solutions into web development.',
    },
    {
      icon: BookOpen,
      title: 'Fantasy Writer',
      description: 'Crafting immersive fantasy worlds and compelling narratives in my spare time.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A passionate developer who loves to create, learn, and innovate
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-6 bg-dark-800/50 rounded-2xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-br from-dark-800/80 to-dark-900/80 rounded-2xl border border-dark-700"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a frontend developer with a deep passion for creating beautiful, functional web experiences. 
            My journey in tech is driven by curiosity and a love for problem-solving. When I'm not coding, 
            you'll find me exploring the latest AI technologies, writing fantasy novels, or enjoying a good 
            game of football or volleyball. I believe in continuous learning and pushing the boundaries of 
            what's possible on the web.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
