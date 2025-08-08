import React, { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Brain Tumor Detection with KNN and SVM',
      description: 'A machine learning application to classify brain tumors from MRI images using feature extraction and traditional classifiers.',
      image: '/brain.png',
      category: 'ml',
      technologies: ['ResNet18', 'KNN', 'SVM', 'Flask', 'Matplotlib'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'E-commerce Website with Angular and Node.js',
      description: 'A full-stack e-commerce web application with secure payment integration and social login.',
      image: '/p1.png',
      category: 'fullstack',
      technologies: ['Angular', 'Node.js', 'Express', 'MySQL', 'JWT', 'ZaloPay'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Food E-commerce Website with Laravel',
      description: 'A web-based food ordering and delivery platform with real-time chat support and secure transactions.',
      image: '/p2.png',
      category: 'backend',
      technologies: ['Laravel', 'Blade', 'ZaloPay', 'WebSocket', 'ChatGPT API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
  ];

  const categories = [
    { id: 'all', name: 'All', count: projects.length },
    { id: 'ml', name: 'Machine Learning', count: projects.filter(p => p.category === 'ml').length },
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Notable academic and freelance projects with practical applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600'
                  }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${project.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                  }`}
              >
                <div className=" bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl">
                  {project.image.includes('http') || project.image.startsWith('/') ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full object-contain"
                    />
                  ) : (
                    project.image
                  )}
                </div>

                <div className="p-6">
                  {project.featured && (
                    <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      ⭐ Featured
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300"
                    >
                      🌐 Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300"
                    >
                      📂 Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              🔍 View More Projects on GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;