import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Achievements } from './components/sections/Achievements'
import { Contact } from './components/sections/Contact'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'

export default function App() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-base">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}