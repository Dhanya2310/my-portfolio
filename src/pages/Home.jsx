import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Achievements from '../components/Achievements.jsx'
import Certifications from '../components/Certifications.jsx'
import DSASection from '../components/DSASection.jsx'
import ResumeCTA from '../components/ResumeCTA.jsx'
import Contact from '../components/Contact.jsx'

// Order of sections on the page. Reorder here if you want a different flow.
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <DSASection />
      <ResumeCTA />
      <Contact />
    </>
  )
}
