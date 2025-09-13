"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-foreground">Networthwars</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button variant="outline" asChild>
              <a href="https://docs.networthwars.com" target="_blank" rel="noopener noreferrer">
                Read Docs
              </a>
            </Button>
            <Button asChild className="animate-glow">
              <a href="https://join.netowrthwars.com" target="_blank" rel="noopener noreferrer">
                Join Now
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <a href="https://docs.networthwars.com" target="_blank" rel="noopener noreferrer">
                  Read Docs
                </a>
              </Button>
              <Button asChild className="w-full">
                <a href="https://join.netowrthwars.com" target="_blank" rel="noopener noreferrer">
                  Join Now
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
