import { Brain, Github, ExternalLink } from 'lucide-react'
import Section from './Section.jsx'
import { site } from '../data/siteConfig.js'

const topics = [
  'Arrays',
  'Strings',
  'Recursion',
  'STL',
  // 'Stack & Queue',
  // 'Heap',
  // 'Priority Queue',
]

export default function DSASection() {
  return (
    <Section id="dsa" title="DSA & Coding" icon={Brain}>
      <div className="card dsa-card">
        <p className="dsa-line">
          Currently improving my problem-solving skills through Data Structures &amp; Algorithms.
        </p>
        <ul className="chips">
          {topics.map((t) => (
            <li key={t} className="chip chip-accent">
              {t}
            </li>
          ))}
        </ul>
        <div className="btn-row">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <Github size={18} aria-hidden="true" /> GitHub
          </a>
          {/* PLACEHOLDER link: set `leetcode` in src/data/siteConfig.js */}
          <a href={site.leetcode} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <ExternalLink size={18} aria-hidden="true" /> LeetCode
          </a>
          <a href={site.Codechef} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <ExternalLink size={18} aria-hidden="true" /> CodeChef
          </a>
        </div>
      </div>
    </Section>
  )
}
