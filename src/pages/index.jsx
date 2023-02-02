import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { About } from '../components/About'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../scss/index.scss'

export default function IndexPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div
      style={{ background: isDarkMode && '#000', color: isDarkMode && '#fff' }}
    >
      <header>
        <Navbar setIsDarkMode={setIsDarkMode} />
      </header>
      <main>
        <About isDarkMode={isDarkMode} />
        <Services isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
      <Footer />
    </div>
  )
}
