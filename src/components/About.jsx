import { User, GraduationCap, MapPin, Heart } from 'lucide-react'
import Section from './Section.jsx'
import { site } from '../data/siteConfig.js'

const facts = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.E. in Computer Science & Engineering (current student)',
  },
  { icon: MapPin, label: 'Location', value: 'Sahyadri college of engineering and management, Mangalore' },
  {
    icon: Heart,
    label: 'Interests',
    value: 'Software development, problem solving, web development, AI apps, hackathons',
  },
]

export default function About() {
  return (
    <Section id="about" title="About Me" icon={User}>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm Dhanya Naik, a Computer Science Engineering student who enjoys software development
            and problem solving. I'm currently learning Data Structures and Algorithms and building
            projects to turn what I learn into something practical.
          </p>
          <p>
            I'm especially interested in web development and AI-powered applications, and I enjoy
            taking part in hackathons where I can build working ideas with a team.
          </p>
        </div>

        <ul className="fact-list">
          {facts.map(({ icon: Icon, label, value }) => (
            <li key={label} className="fact">
              <Icon size={22} aria-hidden="true" />
              <div>
                <h3>{label}</h3>
                <p>{value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
