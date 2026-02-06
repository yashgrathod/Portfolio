import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Hackathons from './components/Hackathons'
import Achievements from './components/Achievements'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Primary Sections (linked in navbar) */}
        <Hero />
        <Journey />
        <Skills />
        <Projects />

        {/* Additional Sections */}
        <Internships />
        <Hackathons />
        <Achievements />

        {/* Contact Footer */}
        <Footer />
      </main>
    </div>
  )
}

export default App
