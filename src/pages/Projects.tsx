import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'DocNet - AI Medical Assistant',
    description: 'A AI assistant to answer all medical queries at one place.',
    image: 'https://www.biospectrumasia.com/uploads/articles/1-11222.jpg',
    tags: ['React', 'Next.js', 'Primsa', 'Shadcn'],
    githubUrl: 'https://github.com/DebarshiSaha924/docnet',
    liveUrl: 'https://docnet.vercel.app/',
  },
  {
    title: 'Task Management App',
    description: 'A beautiful and intuitive task management application',
    image:
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Credit Card Fraud Detection Analysis',
    description:
      'Applying data science techniques to identify and prevent fraudulent credit card transactions.',
    image:
      'https://media.licdn.com/dms/image/D4D12AQHYXAjVRZqRpQ/article-cover_image-shrink_720_1280/0/1714059464450?e=2147483647&v=beta&t=wzOyrGFh7Ge6S8Pov9NeKAraekfiKnUrn0ijPa9DgPw',
    tags: ['Python ', 'Data Analysis', 'Machine Learning'],
    githubUrl:
      'https://github.com/DebarshiSaha924/CODSOFT/tree/main/creditcard_fraud',
    liveUrl:
      'github.com/DebarshiSaha924/CODSOFT/blob/main/creditcard_fraud/Credit_card_fraud.ipynb',
  },
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my featured projects. Each one represents a unique
            challenge and solution in web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
