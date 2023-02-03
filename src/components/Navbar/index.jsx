import React, { useState } from 'react'
import Toggle from './components/Toggle'
import { Squash as Hamburger } from 'hamburger-react'

import NavItem from './components/NavItem'
import './Navbar.scss'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isOpen, setOpen] = useState(false)

  const navItems = ['Servicios', 'Tecnologías', 'Proyectos', 'Contacto']

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <nav className='navbar container'>
      <div className='navbar-left'>
        <div className='navbar-left__name'>{`<CjDev544 />`}</div>
        <Toggle setIsDarkMode={setIsDarkMode} />
      </div>
      <div className='navbar-right'>
        <div className={`navbar-right__list ${isOpen ? 'isOpen' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <NavItem
                key={item}
                item={item}
                isDarkMode={isDarkMode}
                setOpen={setOpen}
              />
            ))}
          </ul>
        </div>
        <a href='contacto' className='button navbar-button'>
          Contactame
        </a>
        <Hamburger
          direction='right'
          toggled={isOpen}
          toggle={setOpen}
          className='navbar-hamburger'
        />
      </div>
    </nav>
  )
}

export default Navbar
