import { Code2, Globe, Braces, Wrench, Sparkles, BookOpen } from 'lucide-react'
import Section from './Section.jsx'
import { skillCategories, currentlyLearning } from '../data/skills.js'

const icons = { code: Code2, globe: Globe, braces: Braces, wrench: Wrench, sparkles: Sparkles }

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      icon={Code2}
      subtitle="Technologies I've worked with while learning and building projects."
    >
      <div className="skill-grid">
        {skillCategories.map((cat) => {
          const Icon = icons[cat.icon] || Code2
          return (
            <article key={cat.title} className="card skill-card">
              <h3>
                <Icon size={18} aria-hidden="true" /> {cat.title}
              </h3>
              <ul className="chips">
                {cat.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>

      <div className="learning card">
        <h3>
          <BookOpen size={18} aria-hidden="true" /> Currently Learning
        </h3>
        <ul className="chips">
          {currentlyLearning.map((item) => (
            <li key={item} className="chip chip-accent">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
