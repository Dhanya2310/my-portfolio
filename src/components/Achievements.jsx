import { Trophy } from 'lucide-react'
import Section from './Section.jsx'
import { achievements } from '../data/achievements.js'

export default function Achievements() {
  return (
    <Section
      id="achievements"
      title="Hackathons & Achievements"
      icon={Trophy}
      subtitle="Events where I built and presented projects with a team."
    >
      <ol className="timeline">
        {achievements.map((a) => (
          <li key={a.id} className="timeline-item">
            <span className="timeline-dot" aria-hidden="true" />
            <article className="card achievement-card">
              <div className="project-top">
                <h3>{a.event}</h3>
                <span className="badge">{a.type}</span>
              </div>
              <dl className="detail-list">
                <div>
                  <dt>Project</dt>
                  <dd>{a.project}</dd>
                </div>
                <div>
                  <dt>Problem statement</dt>
                  <dd>{a.statement}</dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{a.role}</dd>
                </div>
                <div>
                  <dt>Outcome</dt>
                  <dd>{a.outcome}</dd>
                </div>
              </dl>
              <ul className="chips chips-sm" aria-label={`${a.event} technologies`}>
                {a.tech.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}
