import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Database, Brain, Globe } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Financial Advisor File Management System',
      description: 'A comprehensive file management solution designed specifically for financial advisors to streamline their document organization and client data management. This system helps advisors maintain organized records, track client information, and improve their workflow efficiency.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'File Upload', 'Search & Filter'],
      category: 'Web Application',
      status: 'Completed',
      features: [
        'Secure file upload and storage',
        'Advanced search and filtering capabilities',
        'Client data management dashboard',
        'Document categorization and tagging',
        'User authentication and authorization',
        'Responsive design for all devices'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'SC Micro AI Executive Assistant',
      description: 'An agentic AI application built for SC Micro startup executives to automate decision-making processes and workflow management. This intelligent system can analyze data, generate reports, and provide actionable insights to support executive decision-making.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'OpenAI API', 'LangChain', 'Agentic AI', 'API Development', 'Data Analysis'],
      category: 'AI Application',
      status: 'In Progress',
      features: [
        'Intelligent workflow automation',
        'Data analysis and reporting',
        'Natural language processing',
        'Decision support system',
        'Integration with existing tools',
        'Real-time insights and recommendations'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode support, and optimized performance for showcasing my work and skills.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Responsive Design'],
      category: 'Web Development',
      status: 'Completed',
      features: [
        'Modern, minimalist design',
        'Dark/light mode toggle',
        'Smooth page transitions',
        'Mobile-responsive layout',
        'Fast loading performance',
        'SEO optimized'
      ],
      github: 'https://github.com/cedriczarate/portfolio',
      live: 'https://cedzarate.com'
    }
  ]

  const categories = ['All', 'Web Application', 'AI Application', 'Web Development']

  return (
    <div>
      {/* Hero Section */}
      <section className="section-first bg-slate-50 dark:bg-dark-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A collection of my work showcasing my skills in software development, AI applications, 
              and modern web technologies. Each project represents my passion for creating innovative 
              solutions that solve real-world problems.
            </p>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{projects.length}</h3>
              <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">AI/ML</h3>
              <p className="text-gray-600 dark:text-gray-300">Specialized Focus</p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Full-Stack</h3>
              <p className="text-gray-600 dark:text-gray-300">Development Skills</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-gray-100 dark:bg-dark-900">
        <div className="container">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Project Image */}
                  <div className="relative h-64 lg:h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-white/80 dark:bg-dark-800/80 rounded-xl flex items-center justify-center mx-auto">
                          {project.category === 'AI Application' && <Brain className="h-8 w-8 text-primary-600" />}
                          {project.category === 'Web Application' && <Globe className="h-8 w-8 text-primary-600" />}
                          {project.category === 'Web Development' && <Code className="h-8 w-8 text-primary-600" />}
                        </div>
                        <div>
                          <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4">
                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary inline-flex items-center text-sm"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      )}
                      {project.live !== '#' && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center text-sm"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-slate-50 dark:bg-dark-800">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl font-bold">Interested in Working Together?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Whether you need a full-stack application, AI-powered solution, or anything in between, 
              let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Start a Project
              </a>
              <a href="/about" className="btn-secondary">
                Learn More About Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects 