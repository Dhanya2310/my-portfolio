import { useState } from 'react'
import { Mail, Github, Globe, Send } from 'lucide-react'
import Section from './Section.jsx'
import { site } from '../data/siteConfig.js'

const links = [
  { icon: Mail, label: 'Email', text: site.email, href: `mailto:${site.email}` },
  { icon: Github, label: 'GitHub', text: site.github.replace('https://', ''), href: site.github },
  { icon: Globe, label: 'Portfolio', text: site.portfolio.replace('https://', ''), href: site.portfolio },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // No backend: this opens the visitor's email app with the message filled in.
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section
      id="contact"
      title="Get In Touch"
      icon={Mail}
      subtitle="Open to internships, collaborations, or just a hello."
    >
      <div className="contact-grid">
        <ul className="contact-links">
          {links.map(({ icon: Icon, label, text, href }) => (
            <li key={label}>
              <a
                href={href}
                className="card contact-link"
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <Icon size={20} aria-hidden="true" />
                <span>
                  <strong>{label}</strong>
                  <small>{text}</small>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <form className="card contact-form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" type="text" required value={form.name} onChange={update} autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required value={form.email} onChange={update} autoComplete="email" />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" required value={form.message} onChange={update} />
          </label>
          <button type="submit" className="btn btn-primary">
            <Send size={16} aria-hidden="true" /> Send message
          </button>
          <p className="form-note">This opens your email app with the message ready to send.</p>
        </form>
      </div>
    </Section>
  )
}
