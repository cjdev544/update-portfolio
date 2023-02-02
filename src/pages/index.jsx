import React from 'react'
import Navbar from '../components/Navbar'
import { About } from '../components/About'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import '../scss/index.scss'
import Footer from '../components/Footer'

export default function IndexPage() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
