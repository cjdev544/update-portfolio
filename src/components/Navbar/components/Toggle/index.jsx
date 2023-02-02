import React, { useState } from 'react'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import './Toggle.scss'

const Toggle = (/* { setIsDarkMode } */) => {
  const [darkMode, setDarkMode] = useState(false)

  const changeStyleMode = () => {
    /* setIsDarkMode((isDarkMode) => {
      setDarkMode(!isDarkMode)
      setIsDarkMode(!isDarkMode)
    }) */
  }

  return (
    <div className='toggle' onClick={changeStyleMode}>
      <Moon />
      <Sun />
      <div
        className='toggle-button'
        style={darkMode ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  )
}

export default Toggle
