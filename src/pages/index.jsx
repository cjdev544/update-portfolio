import React from 'react'
import Navbar from '../components/Navbar'
import '../scss/index.scss'
import { About } from '../components/About'
import Services from '../components/Services'
import Skills from '../components/Skills'

export default function IndexPage() {
  return (
    <div>
      <header>
        <Navbar />
        <About />
        <Services />
        <Skills />
      </header>
      <main></main>
    </div>
  )
}
