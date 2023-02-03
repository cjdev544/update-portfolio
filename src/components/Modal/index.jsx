import React, { useRef } from 'react'
import XButton from '@iconscout/react-unicons/icons/uil-x'

import Project1 from '../Projects/components/Project1'
import Project2 from '../Projects/components/Project2'
import Project3 from '../Projects/components/Project3'
import Project4 from '../Projects/components/Project4'
import './Modal.scss'

const Modal = ({ project, setOpenModal }) => {
  const boxRef = useRef()

  const isClicked = (e) => {
    if (!boxRef.current.contains(e.target)) {
      setOpenModal(false)
    }
  }

  return (
    <div className='modal' onClick={isClicked}>
      <div ref={boxRef} className='box'>
        <XButton
          color='black'
          size={'3rem'}
          className='close'
          onClick={() => setOpenModal(false)}
        />
        <div className='content'>{project === 'project1' && <Project1 />}</div>
        <div className='content'>{project === 'project2' && <Project2 />}</div>
        <div className='content'>{project === 'project3' && <Project3 />}</div>
        <div className='content'>{project === 'project4' && <Project4 />}</div>
      </div>
    </div>
  )
}

export default Modal
