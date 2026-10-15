import useReveal from '../hooks/useReveal.js'

// Shared wrapper for every section: gives consistent spacing, a heading,
// a semantic <section>, and the scroll-reveal animation.
export default function Section({ id, title, icon: Icon, subtitle, children, className = '' }) {
  const [ref, visible] = useReveal()

  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'in' : ''}`}>
          <header className="section-head">
            <h2 id={`${id}-title`}>
              {Icon && <Icon size={24} aria-hidden="true" />}
              {title}
            </h2>
            {subtitle && <p className="section-sub">{subtitle}</p>}
          </header>
          {children}
        </div>
      </div>
    </section>
  )
}
