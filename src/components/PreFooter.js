import React from 'react'
import './PreFooter.css'
import client1 from '../assets/clients/1.png'
import client2 from '../assets/clients/2.png'
import client3 from '../assets/clients/3.png'
import client4 from '../assets/clients/4.png'
import client5 from '../assets/clients/5.png'
import client6 from '../assets/clients/6.png'
import client7 from '../assets/clients/bitbedefi.png'

const PreFooter = () => {
  return (
    <div className='grand-parent'>
      <div className='parent'>
        <div className='child'>
              <img alt='client-image1' src={client1}/>
        </div>
        <div className='child'>
        <img alt='client-image2' src={client2}/>
        </div>
        <div className='child'>
        <img alt='client-image3' src={client3}/>
        </div>
        <div className='child'>
        <img alt='client-image4' src={client4}/>
        </div>
        <div className='child'>
        <img alt='client-image5' src={client5}/>
        </div>
        <div className='child'>
        <img alt='client-image6' src={client6}/>
        </div>
        <div className='child'>
        <img alt='client-image7' src={client7}/>
        </div>
      </div>
    </div>
  )
}

export default PreFooter