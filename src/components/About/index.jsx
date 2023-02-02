import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'

import Resume from '../../images/resume.pdf'
import './About.scss'

export function About(/* { isDarkMode } */) {
  const transition = {
    duration: 2,
    type: 'spring',
  }

  return (
    <section className='about container'>
      <div className='about-left'>
        <div className='about-left__info'>
          <span /* style={{ color: isDarkMode && '#fff' }} */>
            ¡Hola!, yo soy
          </span>
          <h1>Jefferson Campos</h1>
          <span>
            Un gusto poder saludarte, vivo en Caracas Venezuela, soy electrónico
            de profesión y gran entusiasta de la tecnología. Programador,
            guitarrista afisionado y amante de los animales. Contactame y
            llevemos tus ideas a codigo.
          </span>
        </div>
        <a href={Resume} download>
          <button className='button about-left__button'>Descargar CV</button>
        </a>
        <div className='about-left__icons'>
          <a
            href='https://github.com/cjdev544'
            rel='noopener noreferrer nofollow'
            target='_blank'
          >
            <StaticImage
              src='../../images/github.png'
              placeholder='tracedSVG'
              alt='Github'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/cjdev544'
            rel='noopener noreferrer nofollow'
            target='_blank'
          >
            <StaticImage
              src='../../images/linkedin.png'
              placeholder='tracedSVG'
              alt='Linkedin'
            />
          </a>
        </div>
      </div>
      <div className='about-right'>
        <StaticImage
          src='../../images/Vector1.png'
          placeholder='tracedSVG'
          alt='vector 1'
        />
        <StaticImage
          src='../../images/Vector2.png'
          placeholder='tracedSVG'
          alt='vector 2'
        />
        <StaticImage
          src='../../images/boy.png'
          placeholder='tracedSVG'
          alt='Foto CjDev544'
        />
        <motion.div
          initial={{ left: '-26%' }}
          whileInView={{ left: '-14%' }}
          transition={transition}
        >
          <StaticImage
            src='../../images/js.png'
            placeholder='tracedSVG'
            alt='emoji con lentes'
          />
        </motion.div>

        <motion.div
          className='about-right__floting'
          initial={{ top: '4rem', left: '74%' }}
          whileInView={{ top: '4rem', left: '50%' }}
          transition={transition}
        >
          <StaticImage
            src='../../images/web.png'
            placeholder='tracedSVG'
            className='floting-image'
            alt='Corona'
          />
          <span>
            Desarrollador
            <br />
            Web
          </span>
        </motion.div>

        <motion.div
          className='about-right__floting'
          initial={{ left: '9rem', top: '15rem' }}
          whileInView={{ left: '2rem', top: '15rem' }}
          transition={transition}
        >
          <StaticImage
            src='../../images/full.png'
            placeholder='tracedSVG'
            className='floting-image'
            alt='Mano arriba'
          />
          <span>
            Desarrollos
            <br />
            FullStack
          </span>
        </motion.div>

        <div className='blur' style={{ background: 'rgb(238 210 255)' }} />
        <div
          className='blur'
          style={{
            background: '#c1f5ff',
            top: '17rem',
            left: '-9rem',
            width: '21rem',
            height: '11rem',
          }}
        />
      </div>
    </section>
  )
}
