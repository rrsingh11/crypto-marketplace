import React from 'react'
import './Signup.css'
import { ThemeContext } from '../components/Context.js'

import Crypto from '../assets/trade.png'
import { useContext } from 'react'


const Signup = () => {
    const theme=useContext(ThemeContext);
    console.log(theme)
    
    return (
        
            
        <div className='signup'>
            
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}
                <div className="right">
                    <h2 className={theme?"darktext":"text"}>BUY AND SELL BITBE EXCHANGE</h2>
                    <p className={theme?"darktext":"text"} >Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account our off work system, expound the actual teachings of the great explorer sed of the truth.</p>
                    <div className='input-container'>
                        {/* <input type='email' placeholder='Enter your email' /> */}
                        <button className='btn'>Buy Now</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup