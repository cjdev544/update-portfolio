import React from 'react'
import Navbar from '../components/Navbar'
import { About } from '../components/About'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import '../scss/index.scss'

export default function IndexPage() {
  return (
    <div>
      <header>
        <Navbar />
        <About />
        <Services />
        <Skills />
        <Projects />
      </header>
      <main></main>
    </div>
  )
}
