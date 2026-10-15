import { useState } from 'react'
import { FolderOpen } from 'lucide-react'
import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects, projectFilters } from '../data/projects.js'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.kinds.includes(filter))

  return (
    <Section
      id="projects"
      title="Projects"
      icon={FolderOpen}
      subtitle="A mix of web apps, hackathon builds and prototypes. Concepts are labelled as such."
    >
      <div className="filters" role="group" aria-label="Filter projects">
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {shown.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  )
}
