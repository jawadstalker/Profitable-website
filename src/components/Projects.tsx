import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI-Powered Dashboard',
      description: 'A modern analytics dashboard with AI-driven insights and real-time data visualization.',
      image: 'public/italia.jpg',   
      tags: ['React', 'TypeScript', 'AI', 'Charts'],
      github: 'https://github.com/jawadstalker',
      demo: '#',
    },
    
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with cart management and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['React', 'Next.js', 'Tailwind', 'Stripe'],
      github: 'https://github.com/jawadstalker',
      demo: '#',
    },
    {
      title: 'Portfolio CMS',
      description: 'Content management system for creative professionals to showcase their work.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'CMS', 'API'],
      github: 'https://github.com/jawadstalker',
      demo: '#',
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging app with AI-powered smart replies and sentiment analysis.',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop',
      tags: ['React', 'WebSocket', 'AI', 'Real-time'],
      github: 'https://github.com/jawadstalker',
      demo: '#',
    },
    {
      title: 'Task Management Tool',
      description: 'Intuitive project management application with team collaboration features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'Drag & Drop'],
      github: 'https://github.com/jawadstalker',
      demo: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with location-based forecasts and interactive maps.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      tags: ['React', 'API', 'Maps', 'UI/UX'],
      github: 'https://github.com/jawadstalker',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-dark-800/50 rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-dark-700 text-primary-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target={project.demo === '#' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors ${project.demo === '#' ? 'cursor-not-allowed opacity-50' : ''}`}
                    onClick={(e) => project.demo === '#' && e.preventDefault()}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
