import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Cpu, Dribbble, Award, Gamepad2, Brain } from 'lucide-react';

const Interests: React.FC = () => {
  const interests = [
    {
      icon: BookOpen,
      title: 'Fantasy Writing',
      description: 'I am passionate about fantasy storytelling and world-building. Reading fantasy novels and writing my own epic tales is something I take very seriously.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'In the near future, I plan to dive into video game creation and development. I love designing interactive worlds and gameplay experiences.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Cpu,
      title: 'Front-End Development',
      description: 'I work in front-end development using React. Crafting responsive, interactive interfaces and learning modern web technologies is my daily passion.',
      color: 'from-primary-500 to-cyan-600',
    },
    {
      icon: Brain,
      title: 'AI & Neural Networks',
      description: 'I enjoy exploring artificial intelligence, working on large language models and neural networks. Developing intelligent applications excites me.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Dribbble,
      title: 'Football',
      description: 'Football is my favorite sport. Playing or watching, it keeps me active and fuels my team spirit.',
      color: 'from-orange-400 to-red-500',
    },
    {
      icon: Award,
      title: 'Volleyball',
      description: 'Volleyball is a strategic and athletic sport I love. It helps me stay fit, improve coordination, and enjoy teamwork.',
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  return (
    <section id="interests" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Beyond <span className="text-gradient">Code</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passions and hobbies that inspire my creativity and shape my journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative p-8 bg-dark-800/50 rounded-2xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${interest.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-300`} />
              
              <div className={`w-16 h-16 bg-gradient-to-br ${interest.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <interest.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3">{interest.title}</h3>
              <p className="text-gray-400 leading-relaxed">{interest.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 bg-gradient-to-br from-primary-900/20 to-purple-900/20 rounded-2xl border border-primary-500/30 text-center"
        >
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            These interests fuel my creativity and problem-solving skills. Whether coding in React, 
            exploring AI models, crafting fantasy stories, or playing sports, each activity teaches me valuable lessons in perseverance, teamwork, and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;
