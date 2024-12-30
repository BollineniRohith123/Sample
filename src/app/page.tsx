import Biography from './components/Biography'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <Biography />
      <Skills />
      <Projects />
      <Education />
    </div>
  )
}
