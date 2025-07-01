import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Brain, Database, Globe, Zap } from 'lucide-react'

const Home = () => {
  const skills = [
    { icon: Code, name: 'Full-Stack Development', color: 'text-blue-500' },
    { icon: Brain, name: 'AI & Machine Learning', color: 'text-purple-500' },
    { icon: Database, name: 'Database Design', color: 'text-green-500' },
    { icon: Globe, name: 'Web Technologies', color: 'text-orange-500' },
    { icon: Zap, name: 'Agentic AI Workflows', color: 'text-red-500' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="section-first min-h-screen flex items-center bg-gray-100 dark:bg-dark-900">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-lg text-primary-600 dark:text-primary-400 font-medium"
                >
                  Hello, I'm
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Cedric Zarate
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-3xl lg:text-4xl font-semibold gradient-text"
                >
                  Software Engineer & AI Specialist
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                Computer Science major at Diablo Valley College (DVC) with a passion for 
                building intelligent systems and agentic AI workflows. Currently interning 
                at SC Micro startup, creating innovative AI solutions for executives.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/projects" className="btn-primary inline-flex items-center justify-center">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/contact" className="btn-secondary inline-flex items-center justify-center">
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-transparent"></div>
                <div className="absolute top-8 left-8 right-8 bottom-8 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-xl border border-white/20 dark:border-dark-700/20">
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 dark:bg-dark-600 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 dark:bg-dark-600 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-200 dark:bg-dark-600 rounded w-5/6"></div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-16 h-8 bg-primary-500 rounded"></div>
                      <div className="w-16 h-8 bg-gray-300 dark:bg-dark-600 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-slate-50 dark:bg-dark-700">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Specialized in modern software development with a focus on AI and intelligent systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-dark-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <skill.icon className={`h-6 w-6 ${skill.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {skill.name === 'Full-Stack Development' && 'React, Node.js, Python, and modern web technologies'}
                  {skill.name === 'AI & Machine Learning' && 'Machine learning algorithms, neural networks, and AI model development'}
                  {skill.name === 'Database Design' && 'SQL, NoSQL databases, and efficient data architecture'}
                  {skill.name === 'Web Technologies' && 'Responsive design, modern frameworks, and web performance optimization'}
                  {skill.name === 'Agentic AI Workflows' && 'Building intelligent autonomous systems and AI agent architectures'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-50 dark:bg-dark-900">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl font-bold">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Let's collaborate on your next project. Whether it's AI-powered applications, 
              web development, or innovative software solutions, I'm here to help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Start a Project
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More About Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 