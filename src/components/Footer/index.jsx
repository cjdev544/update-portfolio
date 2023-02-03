import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Gitub from '@iconscout/react-unicons/icons/uil-github'

import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <StaticImage
        src='../../images/wave.png'
        placeholder='blurred'
        alt='footer'
        className='footer-background'
      />
      <div className='footer-content'>
        <span>CjDev544</span>
        <div className='footer-icons'>
          <a
            href='https://github.com/cjdev544'
            rel='noopener noreferrer nofollow'
            target='_blank'
          >
            <Gitub color='white' size={'3rem'} />
          </a>
          <a
            href='https://www.linkedin.com/in/cjdev544'
            rel='noopener noreferrer nofollow'
            target='_blank'
          >
            <Linkedin color='white' size={'3rem'} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
