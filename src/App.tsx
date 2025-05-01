"use client"

import { useState, useEffect } from "react"
import { Header } from "@/pages/header"
import { Hero } from "@/pages/hero"
import { About } from "@/pages/about"
import { Experience } from "@/pages/experience"
import { Skills } from "@/pages/skills"
import { Projects } from "@/pages/projects"
import { Contact } from "@/pages/contact"
import { Footer } from "@/pages/footer"
import { ThemeToggle } from "./components/ui/theme-toggle"
import { ThemeProvider } from "./components/ui/theme-provider"

function App() {
  const [mounted, setMounted] = useState(false)

  // Ensure theme is applied after hydration to avoid flash
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <div className="fixed bottom-4 right-4">
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
