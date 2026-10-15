import { Github, Mail } from 'lucide-react'
import { site } from '../data/siteConfig.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© 2026 Dhanya Naik. Built with React.</p>
        <div className="footer-icons">
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
