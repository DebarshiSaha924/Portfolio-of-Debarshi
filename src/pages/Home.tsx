import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-indigo-600">Debarshi Saha</span>
              <br />
              Web Developer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I craft beautiful, user-friendly websites and applications with
              modern technologies. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <div className="flex gap-4">
                <a
                  href="https://github.com/DebarshiSaha924"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-900 transition-colors"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/debarshi924/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
