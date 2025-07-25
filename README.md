# Cedric Zarate - Personal Portfolio

[🌐 **View the live site at cedzarate.com**](https://cedzarate.com)

A modern, responsive portfolio website showcasing my work as a Software Engineer & AI Specialist. Built with React, Tailwind CSS v4, and Framer Motion for smooth animations.

![Portfolio Preview](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preferences
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Performance Optimized**: Built with Vite for fast development and production builds
- **SEO Friendly**: Optimized for search engines and accessibility

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Styling**: Tailwind CSS v4 with custom design system
- **Build Tool**: Vite 7.0.0
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Development**: TypeScript support

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cedriczarate/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
cedric-portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx      # Navigation component
│   │   └── Footer.jsx      # Footer component
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Home page
│   │   ├── About.jsx       # About page
│   │   ├── Projects.jsx    # Projects page
│   │   └── Contact.jsx     # Contact page
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles & Tailwind config
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies & scripts
├── tailwind.config.ts      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🎨 Design System

### Color Palette
- **Primary Colors**: Blue gradient system
- **Dark Theme**: Custom dark color palette (`dark-50` to `dark-900`)
- **Light Theme**: Subtle grays and slate colors

### Typography
- **Font Family**: Inter (system fallback)
- **Headings**: Bold weights with proper hierarchy
- **Body Text**: Optimized for readability

### Components
- **Cards**: Consistent card design with hover effects
- **Buttons**: Primary and secondary button styles
- **Sections**: Alternating background colors for visual separation

## 🌙 Dark Mode

The portfolio features a sophisticated dark mode implementation:
- **Toggle**: Easy switch between light and dark themes
- **Persistence**: User preferences saved in localStorage
- **Smooth Transitions**: Animated theme switching
- **Custom Colors**: Tailored dark color palette

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Responsive breakpoints for all screen sizes
- **Touch Friendly**: Optimized for touch interactions
- **Performance**: Optimized for mobile performance

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `App.jsx`