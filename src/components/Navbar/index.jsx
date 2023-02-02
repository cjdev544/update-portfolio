import React, { useState } from 'react'
import Toggle from './components/Toggle'
import { Link } from 'react-scroll'
import { Squash as Hamburger } from 'hamburger-react'

import './Navbar.scss'

const Navbar = (/* { setIsDarkMode } */) => {
  const [isOpen, setOpen] = useState(false)

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <nav className='navbar container'>
      <div className='navbar-left'>
        <div className='navbar-left__name'>{`<CjDev544 />`}</div>
        <Toggle /* setIsDarkMode={setIsDarkMode} */ />
      </div>
      <div className='navbar-right'>
        <div className={`navbar-right__list ${isOpen ? 'isOpen' : ''}`}>
          <ul>
            <li className='navbar-right__list-item'>
              <Link to='servicios' spy={true} smooth={true} onClick={closeMenu}>
                Servicios
              </Link>
            </li>
            <li className='navbar-right__list-item'>
              <Link
                to='tecnologias'
                spy={true}
                smooth={true}
                onClick={closeMenu}
              >
                Tecnologías
              </Link>
            </li>
            <li className='navbar-right__list-item'>
              <Link to='proyectos' spy={true} smooth={true} onClick={closeMenu}>
                Proyectos
              </Link>
            </li>
            <li className='navbar-right__list-item'>
              <Link to='contacto' spy={true} smooth={true} onClick={closeMenu}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to='contacto'
          spy={true}
          smooth={true}
          className='button navbar-button'
        >
          Contactame
        </Link>
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
