import React from 'react'
import './menu-dropdown.css'
import {FaSearch} from 'react-icons/fa'
import {FaStore} from 'react-icons/fa'
import {FaExchangeAlt} from 'react-icons/fa'
import {FaHandshake} from 'react-icons/fa'
import {FaFileContract} from 'react-icons/fa'
import {GiToken} from 'react-icons/gi'
import {GiTrade} from 'react-icons/gi'
import {BiBasket} from 'react-icons/bi'

const MenuDropdown = () =>{
    return(
        <>
            <div className='container'>
                <ul className='block'>
                    <li>
                        <FaSearch className='icon'></FaSearch>
                        <a href='#'>Buy crypto</a>
                    </li>
                    <li>
                        <GiToken className='icon'></GiToken>
                        <a href='#'>New Tokens</a>
                    </li>
                    <li>
                        <FaStore className='icon'></FaStore>
                        <a href='#'>Market</a>
                    </li>
                    <li>
                        <FaExchangeAlt className='icon'></FaExchangeAlt>
                        <a href='#'>Exchange</a>
                    </li>
                </ul>
                <ul className='block'>
                    <li>
                        <GiTrade className='icon'></GiTrade>
                        <a href='#'>Trade</a>
                    </li>
                    <li>
                        <FaFileContract className='icon'></FaFileContract>
                        <a href='#'>Contract</a>
                    </li>
                    <li>
                        <BiBasket className='icon'></BiBasket>
                        <a href='#'>ETF</a>
                    </li>
                    <li>
                        <FaHandshake className='icon'></FaHandshake>
                        <a href='#'>Broker</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default MenuDropdown