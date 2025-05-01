// import Link from "next/link"
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {/* <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Link>
          <Link href="mailto:your.email@example.com" aria-label="Email">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </Link> */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </a>
          <a href="mailto:your.email@example.com" aria-label="Email">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </a>
        </div>
      </div>
    </footer>
  )
}
