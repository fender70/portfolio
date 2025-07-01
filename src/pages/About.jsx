import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Code, Brain, Users, Target } from 'lucide-react'

const About = () => {
  const education = [
    {
      degree: 'Computer Science Major',
      school: 'Diablo Valley College (DVC)',
      period: '2022 - Present',
      description: 'Focusing on software engineering principles, algorithms, and AI/ML fundamentals.'
    }
  ]

  const experience = [
    {
      role: 'AI Intern',
      company: 'SC Micro Startup',
      period: 'Current',
      description: 'Building agentic AI applications for executives, focusing on intelligent workflow automation and decision support systems.',
      technologies: ['Python', 'AI/ML', 'Agentic Systems', 'API Development']
    },
    {
      role: 'Software Developer',
      company: 'Financial Advisory Project',
      period: '2023',
      description: 'Developed a comprehensive file management system for financial advisors to streamline their document organization and client data management.',
      technologies: ['React', 'Node.js', 'Database Design', 'File Management']
    }
  ]

  const interests = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Passionate about developing intelligent systems and exploring the frontiers of artificial intelligence.'
    },
    {
      icon: Code,
      title: 'Software Engineering',
      description: 'Building robust, scalable applications with modern technologies and best practices.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working with teams to solve complex problems and deliver innovative solutions.'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Analyzing challenges and creating efficient, elegant solutions through code.'
    }
  ]

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
            <h1 className="text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate Computer Science student at Diablo Valley College with a deep interest in 
              artificial intelligence and software engineering. My goal is to become a software engineer 
              specializing in agentic AI workflows, creating intelligent systems that can think, learn, and act autonomously.
            </p>
          </motion.div>

          {/* Personal Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-6">Background</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Currently pursuing my Computer Science degree at Diablo Valley College, I'm deeply immersed 
                  in the world of software development and artificial intelligence. My academic journey has 
                  provided me with a solid foundation in programming, algorithms, and system design.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm particularly fascinated by agentic AI workflows - systems that can autonomously 
                  perform complex tasks, make decisions, and learn from their experiences. This interest 
                  drives my current internship at SC Micro startup, where I'm building AI applications 
                  for executives.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not coding or studying, I enjoy staying up-to-date with the latest AI research, 
                  contributing to open-source projects, and exploring new technologies that push the 
                  boundaries of what's possible in software development.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'Python', 'Java', 'C++', 'SQL'].map((lang) => (
                      <span key={lang} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technologies & Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Git', 'Docker'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">AI & ML</h3>
                  <div className="flex flex-wrap gap-2">
                    {['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'LangChain', 'Agentic AI'].map((ai) => (
                      <span key={ai} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                        {ai}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="section bg-gray-100 dark:bg-dark-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Education & Experience</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              My academic journey and professional experience
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-6"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{edu.school}</p>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                  <Briefcase className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-6"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold">{exp.role}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-green-600 dark:text-green-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="section bg-slate-50 dark:bg-dark-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Interests & Passions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              What drives me in the world of technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <interest.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 