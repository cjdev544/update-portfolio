import React, { useRef, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import XButton from '@iconscout/react-unicons/icons/uil-x'
import './Project.scss'

const Project2 = () => {
  const boxRef = useRef()

  const [showPicture, setShowPicture] = useState(null)

  const isClicked = (e) => {
    if (!boxRef.current.contains(e.target)) {
      setShowPicture(null)
    }
  }

  return (
    <div className='project'>
      <h2>Administrador CentralFood</h2>
      <p>
        Aplicación de escritorio implementada con React, Electron y firebase.
        Esta App es el CMS de la página web centralfoodmalaga.com, se encarga de
        gestionar el contenido, recibir los pedidos en tiempo real, mostrar
        estadísticas de ventas, clientes y productos.
      </p>
      <div className='images'>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image1')}
        >
          <StaticImage
            src='../../../images/project2-1.jpg'
            placeholder='tracedSVG'
            alt='administrador central food imagen 1'
            className='projects-img'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image2')}
        >
          <StaticImage
            src='../../../images/project2-2.jpg'
            placeholder='tracedSVG'
            alt='administrador central food imagen 2'
            className='projects-img'
          />
        </button>
      </div>
      <h3>Tecnologias utilizadas</h3>
      <ul>
        <li>React</li>
        <li>Electron</li>
        <li>Semantic UI</li>
        <li>Firebase</li>
      </ul>
      <p className='link'>
        Repositorio:
        <a
          href='https://github.com/cjdev544/electron-cfm-admin'
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          github.com/cjdev544/electron-cfm-admin
        </a>
      </p>
      <div className='images'>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image3')}
        >
          <StaticImage
            src='../../../images/project2-3.jpg'
            placeholder='tracedSVG'
            alt='administrador central food imagen 3'
            className='projects-img'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image4')}
        >
          <StaticImage
            src='../../../images/project2-4.jpg'
            placeholder='tracedSVG'
            alt='administrador central food imagen 4'
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
                src='../../../images/project2-1.jpg'
                placeholder='tracedSVG'
                alt='administrador central food imagen 1'
                className='picture-item'
              />
            )}
            {showPicture === 'image2' && (
              <StaticImage
                src='../../../images/project2-2.jpg'
                placeholder='tracedSVG'
                alt='administrador central food imagen 2'
                className='picture-item'
              />
            )}
            {showPicture === 'image3' && (
              <StaticImage
                src='../../../images/project2-3.jpg'
                placeholder='tracedSVG'
                alt='administrador central food imagen 3'
                className='picture-item'
              />
            )}
            {showPicture === 'image4' && (
              <StaticImage
                src='../../../images/project2-4.jpg'
                placeholder='tracedSVG'
                alt='administrador central food imagen 4'
                className='picture-item'
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Project2
