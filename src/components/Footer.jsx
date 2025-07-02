import { Github, Linkedin, Twitter } from 'lucide-react'

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/fender70',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/cedric-zarate-17b735226',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    url: 'https://x.com/cedzarate',
    icon: Twitter,
  },
]

const Footer = () => (
  <footer className="border-t border-gray-200 dark:border-dark-700 bg-gray-100 dark:bg-dark-900 py-12">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6 px-12 sm:px-16 lg:px-24">
      <div className="text-gray-700 dark:text-gray-400 text-sm font-medium">
        &copy; {new Date().getFullYear()} Cedric Zarate. All rights reserved.
      </div>
      <div className="flex space-x-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200 hover:scale-110"
            aria-label={social.name}
          >
            <social.icon className="h-6 w-6" />
          </a>
        ))}
      </div>
      <a
        href="https://github.com/fender70/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
      >
        View Source on GitHub
      </a>
    </div>
  </footer>
)

export default Footer 