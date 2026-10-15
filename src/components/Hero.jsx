import { ArrowRight, Download, Github, Mail } from 'lucide-react'
import { site } from '../data/siteConfig.js'
import avatar from '../assets/avatar-placeholder.svg'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-hi">Hi, I'm</p>
          <h1 id="hero-title">
            Dhanya <span className="accent">Naik</span>
          </h1>
          <p className="hero-role">{site.title}</p>
          <p className="hero-desc">
            I’m a Computer Science Engineering student who enjoys building practical projects,
            learning new technologies, and solving problems through code.
          </p>

          <div className="btn-row">
            <a href="#projects" className="btn btn-primary">
              View My Projects <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href={site.resumePath} download className="btn btn-outline">
              <Download size={18} aria-hidden="true" /> Download Resume
            </a>
          </div>

          <ul className="hero-links">
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                <Github size={18} aria-hidden="true" /> GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>
                <Mail size={18} aria-hidden="true" /> {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="hero-art">
          <div className="avatar-blob">
            {/* Replace src/assets/avatar-placeholder.svg with your own picture */}
            <img src={avatar} alt="Portrait placeholder for Dhanya Naik" width="400" height="400" />
          </div>
          <p className="hero-tag" aria-hidden="true">
            Better code,
            <br />
            bigger dreams
          </p>
        </div>
      </div>
    </section>
  )
}
