# REST Countries App

A responsive web application for exploring countries with search, filter, and sorting capabilities. Built with Vue 3, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

**[https://countries-nine-virid.vercel.app/](https://countries-nine-virid.vercel.app/)**

## ✨ Features

- Search countries by name, capital, or region (fuzzy search with Fuse.js)
- Filter by region (Africa, Americas, Asia, Europe, Oceania)
- Sort by name or population
- Dark/Light theme toggle
- Fully responsive design
- View detailed country information

## 🛠️ Tech Stack

- Vue 3 (Composition API) + TypeScript
- Tailwind CSS
- Pinia (State Management)
- Vue Router
- Axios
- Vite
- Vitest (Testing)

## 🚀 Getting Started

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/rest-countries-app.git
cd rest-countries-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run test     # Run tests
```

## 📁 Project Structure

```
src/
├── components/      # Reusable components
├── views/          # Page components
├── stores/         # Pinia stores
├── router/         # Vue Router config
├── composables/    # Vue composables
├── types/          # TypeScript types
└── constants/      # App constants
```

## 🌐 API

Uses [REST Countries API](https://restcountries.com/) - `https://restcountries.com/v2/all`

---

Built with Vue 3 + TypeScript + Tailwind CSS
