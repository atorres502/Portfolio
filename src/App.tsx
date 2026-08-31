import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Nav />
      <main>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
      </main>
      <Footer />
    </div>
  )
}

export default App
