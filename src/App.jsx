import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then default to dark mode
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      return JSON.parse(saved)
    }
    return true // Default to dark mode
  })

  useEffect(() => {
    // Save to localStorage whenever dark mode changes
    localStorage.setItem('darkMode', JSON.stringify(isDark))
    console.log('Dark mode state changed to:', isDark)
  }, [isDark])

  useEffect(() => {
    // Apply dark mode to document using data-theme attribute
    const root = document.documentElement
    if (isDark) {
      root.setAttribute('data-theme', 'dark')
      console.log('Set data-theme=dark to document')
    } else {
      root.setAttribute('data-theme', 'light')
      console.log('Set data-theme=light to document')
    }
  }, [isDark])

  return (
    <Router>
      <div className="min-h-screen bg-white transition-colors duration-300">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 