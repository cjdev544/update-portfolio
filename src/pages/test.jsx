import React from 'react'
import { Button, Element, Link } from 'react-scroll'

export default function TestPage() {
  return (
    <div>
      <Link
        activeClass='active'
        to='test1'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Test 1
      </Link>
      <Link
        activeClass='active'
        to='test2'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        delay={1000}
      >
        Test 2 (delay)
      </Link>
      <Link
        className='test6'
        to='anchor'
        spy={true}
        smooth={true}
        duration={500}
      >
        Test 6 (anchor)
      </Link>

      <Element name='test1' className='element'>
        test 1
      </Element>

      <Element name='test2' className='element'>
        test 2
      </Element>
    </div>
  )
}
