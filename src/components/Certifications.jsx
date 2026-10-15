import { Award, ExternalLink } from 'lucide-react'
import Section from './Section.jsx'
import { certifications } from '../data/certifications.js'

export default function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications & Learning"
      icon={Award}
      subtitle="Courses and learning paths I've completed."
    >
      {certifications.length === 0 ? (
        <p className="empty-state card">
          Certificates will appear here. Add them in <code>src/data/certifications.js</code>.
        </p>
      ) : (
        <ul className="cert-grid">
          {certifications.map((c) => (
            <li key={c.id} className="card cert-card">
              <span className="badge">{c.issuer}</span>
              <h3>{c.title}</h3>
              {c.credentialUrl && (
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  View credential <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
