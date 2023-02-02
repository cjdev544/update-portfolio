import React from 'react'
import Navbar from '../components/Navbar'
import '../scss/index.scss'
import { About } from '../components/About'

export default function IndexPage() {
  return (
    <div>
      <header>
        <Navbar />
        <About />
      </header>
      <main></main>
    </div>
  )
}
