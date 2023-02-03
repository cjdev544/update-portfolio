import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

import './Services.scss'

const Services = ({ isDarkMode }) => {
  const transition = {
    duration: 1,
    type: 'spring',
  }

  return (
    <section className='services container' id='servicios'>
      <div className='services-left'>
        <span style={{ color: isDarkMode && '#fff' }}>Conoce mis</span>
        <h2>Servicios</h2>
        <span>
          En esta sección podras ver los servicios que ofrezco como
          desarrollador. <br /> Si buscas algo especifico, no dudes en
          contactarme.
        </span>
        <Link
          to='contacto'
          spy={true}
          smooth={true}
          className='button services-left__button'
        >
          Contactame
        </Link>
        <div
          className='blur services-blur1'
          style={{ background: '#abf1ff94' }}
        />
      </div>
      <div className='services-right'>
        <motion.div
          initial={{ left: '-11rem' }}
          whileInView={{ left: '15rem' }}
          transition={transition}
        >
          <div className='services-card'>
            <StaticImage
              src='../../images/ui.png'
              placeholder='blurred'
              alt='emoji diseño UI UX'
              className='services-card__img'
            />
            <h3 style={{ color: isDarkMode && '#fff' }}>UI / UX</h3>
            <p>
              Diseños atracivos enfocados en la usabilidad y experencia de
              usuario
            </p>
          </div>
        </motion.div>
        <motion.div
          style={{ top: '12rem', left: '-10rem' }}
          initial={{ left: '25rem' }}
          whileInView={{ left: '-5rem' }}
          transition={transition}
        >
          <div className='services-card'>
            <StaticImage
              src='../../images/prog.png'
              placeholder='blurred'
              alt='emoji Programación'
              className='services-card__img'
            />
            <h3 style={{ color: isDarkMode && '#fff' }}>Programación</h3>
            <p>
              Desarrollo de sitios web, Apps web y Apps de escritorio con
              tecnologías web
            </p>
          </div>
        </motion.div>
        <motion.div
          style={{ top: '19rem', left: '15rem' }}
          initial={{ left: '-11rem', top: '19rem' }}
          whileInView={{ left: '10rem', top: '19rem' }}
          transition={transition}
        >
          <div className='services-card'>
            <StaticImage
              src='../../images/responsive.png'
              placeholder='blurred'
              alt='emoji diseño renponsivo'
              className='services-card__img'
            />
            <h3 style={{ color: isDarkMode && '#fff' }}>Diseño responsivo</h3>
            <p>
              Diseño adaptable a dispositivos, mobil, tablet y de escritorio.
            </p>
          </div>
        </motion.div>
        <div
          className='blur services-blur2'
          style={{ background: 'rgb(238 210 255)' }}
        />
      </div>
      {/* Services card for tablet and mobile */}
      <div className='right-media'>
        <div className='right-card'>
          <StaticImage
            src='../../images/ui.png'
            placeholder='blurred'
            alt='emoji diseño UI UX'
            className='services-card__img'
          />
          <h3 style={{ color: isDarkMode && '#fff' }}>UI / UX</h3>
          <p>
            Diseños atracivos enfocados en la usabilidad y experencia de usuario
          </p>
        </div>
        <div className='right-card'>
          <StaticImage
            src='../../images/prog.png'
            placeholder='blurred'
            alt='emoji Programación'
            className='services-card__img'
          />
          <h3 style={{ color: isDarkMode && '#fff' }}>Programación</h3>
          <p>
            Desarrollo de sitios web, Apps web y Apps de escritorio con
            tecnologías web
          </p>
        </div>
        <div className='right-card'>
          <StaticImage
            src='../../images/responsive.png'
            placeholder='blurred'
            alt='emoji diseño renponsivo'
            className='services-card__img'
          />
          <h3 style={{ color: isDarkMode && '#fff' }}>Diseño responsivo</h3>
          <p>Diseño adaptable a dispositivos, mobil, tablet y de escritorio.</p>
        </div>
        <div
          className='blur services-blur2'
          style={{ background: 'rgb(238 210 255)' }}
        />
      </div>
    </section>
  )
}

export default Services
