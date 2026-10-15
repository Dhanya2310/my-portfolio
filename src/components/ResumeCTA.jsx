import { FileText, Download } from 'lucide-react'
import { site } from '../data/siteConfig.js'
import useReveal from '../hooks/useReveal.js'

export default function ResumeCTA() {
  const [ref, visible] = useReveal()

  return (
    <section id="resume" className="section" aria-labelledby="resume-title">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'in' : ''} card cta-card`}>
          <h2 id="resume-title">Want to know more about my work?</h2>
          <p>Take a look at my resume for my education, projects and certifications.</p>
          <div className="btn-row center">
            {/* The PDF is not included. Add it to /public/resume/ (see README) */}
            <a href={site.resumePath} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FileText size={18} aria-hidden="true" /> View Resume
            </a>
            <a href={site.resumePath} download className="btn btn-outline">
              <Download size={18} aria-hidden="true" /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
