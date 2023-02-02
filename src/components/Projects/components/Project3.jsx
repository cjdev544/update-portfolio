import React, { useRef, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import XButton from '@iconscout/react-unicons/icons/uil-x'
import './Project.scss'

const Project3 = () => {
  const boxRef = useRef()

  const [showPicture, setShowPicture] = useState(null)

  const isClicked = (e) => {
    if (!boxRef.current.contains(e.target)) {
      setShowPicture(null)
    }
  }

  return (
    <div className='project'>
      <h2>Facebook clone</h2>
      <p>
        Clon de facebook. Aplicación que emula las caracteristicas basicas de
        facebook como, registro e inicio de sesión, edición del perfil, agregar
        o eliminar contactos, crear posts con imagenes y emojis, dar o quitar
        likes y gran parte de la interfaz de usuario.
      </p>
      <div className='images'>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image1')}
        >
          <StaticImage
            src='../../../images/project3-1.jpg'
            placeholder='tracedSVG'
            alt='clone de facebook 1'
            className='projects-img'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image2')}
        >
          <StaticImage
            src='../../../images/project3-2.jpg'
            placeholder='tracedSVG'
            alt='clone de facebook 2'
            className='projects-img'
          />
        </button>
      </div>
      <h3>Tecnologias utilizadas</h3>
      <ul>
        <li>NextJs</li>
        <li>Tailwind</li>
        <li>Firebase</li>
      </ul>
      <p className='link'>
        Web:
        <a
          href='https://facebook-clone-two-blond.vercel.app'
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          centralfoodmalaga.com
        </a>
      </p>
      <p className='link'></p>
      <p className='link'>
        Repositorio:
        <a
          href='https://github.com/cjdev544/facebook-clone'
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          github.com/cjdev544/facebook-clone
        </a>
      </p>
      <div className='images'>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image3')}
        >
          <StaticImage
            src='../../../images/project3-3.jpg'
            placeholder='tracedSVG'
            alt='clone de facebook 3'
            className='projects-img'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image4')}
        >
          <StaticImage
            src='../../../images/project3-4.jpg'
            placeholder='tracedSVG'
            alt='clone de facebook 4'
            className='projects-img'
          />
        </button>
      </div>

      {showPicture && (
        <div className='picture' onClick={isClicked}>
          <div ref={boxRef}>
            <XButton
              color='white'
              size={'3rem'}
              className='picture-close'
              onClick={() => setShowPicture(null)}
            />
            {showPicture === 'image1' && (
              <StaticImage
                src='../../../images/project3-1.jpg'
                placeholder='tracedSVG'
                alt='clone de facebook imagen 1'
                className='picture-item'
              />
            )}
            {showPicture === 'image2' && (
              <StaticImage
                src='../../../images/project3-2.jpg'
                placeholder='tracedSVG'
                alt='clone de facebook imagen 2'
                className='picture-item'
              />
            )}
            {showPicture === 'image3' && (
              <StaticImage
                src='../../../images/project3-3.jpg'
                placeholder='tracedSVG'
                alt='clone de facebook imagen 3'
                className='picture-item'
              />
            )}
            {showPicture === 'image4' && (
              <StaticImage
                src='../../../images/project3-4.jpg'
                placeholder='tracedSVG'
                alt='clone de facebook imagen 4'
                className='picture-item'
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Project3
