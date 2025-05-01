"use client"

import { useState } from "react"
// import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function Header() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <Link href="/" className="font-bold text-xl">
            Portfolio
          </Link> */}
          <a href="/" className="font-bold text-xl">
            Portfolio
          </a>
        </div>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  // <Link
                  //   key={item.name}
                  //   href={item.href}
                  //   className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                  //   onClick={() => setIsMenuOpen(false)}
                  // >
                  //   {item.name}
                  // </Link>
                  <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
                ))}
                <Button asChild className="w-full mt-2">
                  {/* <Link href="#contact">Hire Me</Link> */}
                  <a href="#contact">Hire Me</a>
                </Button>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              // <Link
              //   key={item.name}
              //   href={item.href}
              //   className="text-sm font-medium transition-colors hover:text-primary"
              // >
              //   {item.name}
              // </Link>
              <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </a>
            ))}
            <Button asChild>
              {/* <Link href="#contact">Hire Me</Link> */}
              <a href="#contact">Hire Me</a>

            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
