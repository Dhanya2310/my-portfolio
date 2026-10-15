import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'

// App only wires the layout together. Page content lives in pages/Home.jsx
// and each section lives in its own file inside components/.
export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Home />
      </main>
      <Footer />
    </>
  )
}
