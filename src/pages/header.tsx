"use client"

import { useState } from "react"
// import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import styles from '@/pages-css/header.module.css';
import { motion } from "framer-motion"

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  
  const navItemVariant = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex flex-col gap-2 min-[400px]:flex-row"
          initial={{ opacity: 0, x: -50 }}  // Start off-screen to the left
          animate={{ opacity: 1, x: 0 }}    // Animate to the original position
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* <Link href="/" className="font-bold text-xl">
            Portfolio
          </Link> */}
          <a href="/" className="font-bold text-xl">
            My Portfolio
          </a>
        </motion.div>

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
          // <motion.div
          //   className="flex flex-col gap-2 min-[400px]:flex-row"
          //   initial={{ opacity: 0, x: -50 }}  // Start off-screen to the left
          //   animate={{ opacity: 1, x: 0 }}    // Animate to the original position
          //   transition={{ duration: 0.5, delay: 0.4 }}
          // >
          //   <nav className={styles.nav}>
          //     {navItems.map((item) => (
          //       <a
          //         key={item.name}
          //         href={item.href}
          //       >
          //         {item.name}
          //       </a>
          //     ))}
          //     <Button className={styles.hireButton}>
          //       <a href="#contact">Hire Me</a>
          //     </Button>
          //   </nav>
          // </motion.div>
          <motion.div
            className="flex flex-col gap-2 min-[400px]:flex-row"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <nav className={styles.nav}>
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  variants={navItemVariant}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div variants={navItemVariant}>
                <Button className={styles.hireButton}>
                  <a href="#contact">Hire Me</a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}
