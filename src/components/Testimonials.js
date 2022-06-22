import React from 'react'
import './Testimonials.css'
import Chairman from '../assets/David_Kim.jpg'

const Testimonials = () => {
  return (
    <div className='hero1'>
      <h1>Testimonial</h1>

      <div className='slide-row'>
        <div className='slide-col'>
          <div className='user-text'>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h3>
                David Kim
              </h3>
              <p>Chairman, IBAF and Bitbe Group</p>
          </div>
          <div className='user-img'>
                <img src={Chairman} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials