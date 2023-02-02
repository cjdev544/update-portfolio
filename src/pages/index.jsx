import React from 'react'
import Navbar from '../components/Navbar'
import '../scss/index.scss'
import { About } from '../components/About'
import Services from '../components/Services'

export default function IndexPage() {
  return (
    <div>
      <header>
        <Navbar />
        <About />
        <Services />
      </header>
      <main></main>
    </div>
  )
}
