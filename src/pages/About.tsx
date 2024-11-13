import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe2, Palette } from 'lucide-react';

const skills = [
  {
    name: 'Frontend Development',
    icon: Palette,
    description: 'React',
  },
  {
    name: 'Backend Development',
    icon: Cpu,
    description: 'Node.js, Python',
  },
  {
    name: 'Web Technologies',
    icon: Globe2,
    description: 'HTML5, CSS3, JavaScript',
  },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with over 1 years of experience in
            creating web applications. I love turning complex problems into
            simple, beautiful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&q=80"
              alt="Professional headshot"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              My Journey
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                I started my journey in software development during college,
                where I discovered my passion for creating digital solutions
                that make a difference.
              </p>
              <p>
                Over the years, I've worked with various technologies and
                frameworks, always staying current with the latest industry
                trends and best practices.
              </p>
              <p>
                When I'm not coding, you can find me in my room with my guitar
                playing some soothing music or raging with a controller in a
                video game.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white rounded-lg shadow-lg"
                >
                  <Icon className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600">{skill.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
