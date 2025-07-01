import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, Code } from 'lucide-react'

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-200 dark:border-dark-700 z-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-primary-600 rounded-lg group-hover:bg-primary-700 transition-colors">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Cedric Zarate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => {
                console.log('Dark mode toggle clicked, current state:', isDark)
                setIsDark(!isDark)
              }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-dark-600"
              aria-label="Toggle dark mode"
            >
              <div className="flex items-center space-x-2">
                {isDark ? (
                  <>
                    <Sun className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm">Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 text-blue-500" />
                    <span className="text-sm">Dark</span>
                  </>
                )}
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => {
                console.log('Mobile dark mode toggle clicked, current state:', isDark)
                setIsDark(!isDark)
              }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-dark-600"
              aria-label="Toggle dark mode"
            >
              <div className="flex items-center space-x-2">
                {isDark ? (
                  <>
                    <Sun className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm">Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 text-blue-500" />
                    <span className="text-sm">Dark</span>
                  </>
                )}
              </div>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-dark-700">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 