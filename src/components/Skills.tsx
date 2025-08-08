import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaAngular,
  FaNodeJs, FaLaravel, FaDocker, FaGitAlt, FaGithub,
  FaDatabase, FaPhp, FaPython
} from 'react-icons/fa';

import { SiMongodb, SiPostgresql, SiPostman, SiMysql, SiDotnet } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: 'Front-End Development',
      icon: '🎨',
      items: [
       { name: 'HTML', icon: <FaHtml5 color="#E34F26" size={30} /> },
        { name: 'CSS / SCSS', icon: <FaCss3Alt color="#1572B6" size={30} /> },
        { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" size={30} /> },
        { name: 'React.js', icon: <FaReact color="#61DAFB" size={30} /> },
        { name: 'Angular', icon: <FaAngular color="#DD0031" size={30} /> },
      ],
    },
    {
      category: 'Back-End Development',
      icon: '⚙️',
      items: [
         { name: 'Node.js / Express', icon: <FaNodeJs color="#339933" size={30} /> },
        { name: 'Laravel (PHP)', icon: <FaLaravel color="#FF2D20" size={30} /> },
        { name: 'C# / ASP.NET', icon: <SiDotnet color="#512BD4" size={30} /> },
      ],
    },
    {
      category: 'Databases',
      icon: '🗄️',
      items: [
       { name: 'MySQL', icon: <SiMysql color="#4479A1" size={30} /> },
        { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" size={30} /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={30} /> },
        { name: 'SQL Server / Oracle', icon: <FaDatabase color="#f29111" size={30} /> },
      ],
    },
    {
      category: 'Tools & Others',
      icon: '🛠️',
      items: [
        { name: 'Git / GitHub', icon: <FaGithub color="#000" size={30} /> },
        { name: 'Postman', icon: <SiPostman color="#FF6C37" size={30} /> },
        { name: 'Docker', icon: <FaDocker color="#2496ED" size={30} /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm always learning and updating with the latest technologies to create the best products.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-8">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 transition px-4 py-2 rounded-lg shadow text-sm font-medium"
                    >
                      <span className="text-xl text-blue-300">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">🚀 Always Ready to Learn</h3>
              <p className="text-gray-300 leading-relaxed">
                Technology is always changing, and I believe continuous learning is the key to success. 
                I regularly take online courses, read documentation, and practice with personal 
                projects to improve my skills.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {[
                  'React', 'Angular', 'Node.js', 'Laravel', 'Docker', 
                  'Python', 'PostgreSQL', 'MongoDB', 'Git', 'VS Code'
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-900 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
