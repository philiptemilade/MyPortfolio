"use client"

import { useState, useEffect } from "react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-primary">
           My Portfolio
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="text-foreground/80 hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">
              Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
