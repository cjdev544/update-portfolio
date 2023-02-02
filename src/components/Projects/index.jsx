import React /* { useEffect, useState } */ from 'react'
import { StaticImage } from 'gatsby-plugin-image'

/* import Modal from '../Modal' */
import './Projects.scss'

const Projects = ({ isDarkMode }) => {
  /*  const [openModal, setOpenModal] = useState(false)
  const [project, setProject] = useState(null)

  useEffect(() => {
    if (!setOpenModal) setProject(null)
  }, [setOpenModal])

  const handleClick = (projectSelected) => {
    setProject(projectSelected)
    setOpenModal(true)
  } */

  return (
    <section id='proyectos' className='projects container'>
      <span style={{ color: isDarkMode && '#fff' }}>Algunos de mis</span>
      <h2>Proyectos</h2>
      <p>Puedes dar click sobre un proyecto y verlo mas en profundidad</p>
      <div className='projects-items'>
        <button
          className='projects-items__card'
          /* onClick={() => handleClick('project1')} */
        >
          <StaticImage
            src='../../images/project1-1.jpg'
            placeholder='tracedSVG'
            alt='web central food Málaga'
            className='projects-img'
          />
        </button>
        <button
          className='projects-items__card'
          /* onClick={() => handleClick('project2')} */
        >
          <StaticImage
            src='../../images/project2-1.jpg'
            placeholder='tracedSVG'
            alt='administrador central food Málaga'
            className='projects-img'
          />
        </button>
        <button
          className='projects-items__card'
          /* onClick={() => handleClick('project3')} */
        >
          <StaticImage
            src='../../images/project3-1.jpg'
            placeholder='tracedSVG'
            alt='clone de facebook'
            className='projects-img'
          />
        </button>
        <button
          className='projects-items__card'
          /* onClick={() => handleClick('project4')} */
        >
          <StaticImage
            src='../../images/project4-1.jpg'
            placeholder='tracedSVG'
            alt='clone de instagram'
            className='projects-img'
          />
        </button>
      </div>
      {/* {openModal && <Modal project={project} setOpenModal={setOpenModal} />} */}
    </section>
  )
}

export default Projects
