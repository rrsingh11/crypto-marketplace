import React from 'react'
import './topBand.css';
import { ThemeContext } from '../components/Context.js';

import {FaApple} from 'react-icons/fa'
import {FaAndroid} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'
import { useContext } from 'react';

const TopBand = () => {
    const {theme}=useContext(ThemeContext)
    
    return(
        <div className="topBand">
            <div className={theme?"dark-topBand_left":"topBand_left"}>
                <p>Buy BTC: $2462</p>
                <div className='div'></div>
                <p>Sell BTC: $2465</p>
            </div>
            <div className="topBand_right">
                <FaApple className='fa ap' />
                <div className='div'></div>
                <FaAndroid className='fa ad'/>
                <div className='div'></div>
                <FaFacebook className='fa fb'/>
                <div className='div'></div>
                <FaYoutube className='fa yt'/>
                <div className='div'></div>
                <FaInstagram className='fa ins'/>
                <div className='div'></div>
                <FaTelegram className='fa tg'/>
            </div>
        </div>
        
    )
}


export default TopBand;