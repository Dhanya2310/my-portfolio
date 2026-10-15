import { Github, ExternalLink, CheckCircle2 } from 'lucide-react'

// One project card. All text comes from src/data/projects.js
export default function ProjectCard({ project }) {
  const { name, tagline, status, description, problem, role, features, tech, github, live } =
    project

  return (
    <article className="card project-card">
      <div className="project-top">
        <h3>{name}</h3>
        <span className="badge">{status}</span>
      </div>
      <p className="project-tagline">{tagline}</p>

      <p className="project-desc">{description}</p>

      <div className="project-block">
        <h4>Problem it solves</h4>
        <p>{problem}</p>
      </div>

      {role && (
        <div className="project-block">
          <h4>My role</h4>
          <p>{role}</p>
        </div>
      )}

      <div className="project-block">
        <h4>Key features</h4>
        <ul className="feature-list">
          {features.map((f) => (
            <li key={f}>
              <CheckCircle2 size={14} aria-hidden="true" /> {f}
            </li>
          ))}
        </ul>
      </div>

      <ul className="chips chips-sm" aria-label={`${name} technologies`}>
        {tech.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>

      <div className="project-actions">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
            aria-label={`${name} on GitHub`}
          >
            <Github size={16} aria-hidden="true" /> GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            aria-label={`${name} live demo`}
          >
            <ExternalLink size={16} aria-hidden="true" /> Live Demo
          </a>
        )}
      </div>
    </article>
  )
}
