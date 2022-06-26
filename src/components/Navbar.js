import React from "react";
import "../App.css";
import header_logo from "../assets/header_logo.png"
import './Navbar.css';
import {FaCaretDown} from 'react-icons/fa'
// import MenuDropdown from "./menu-dropdown";
// import  GoogleTranslator from "./language";

const NavbarComp = () =>{
  return(
    <nav className="navbar">
              <div className="header">
                    <div className="logo_header">
                    <img src={header_logo} alt="header_logo" />
                    </div>
                    
                    <div className="link_header">
                      <a href='https://www.bitbecoin.com/en_US/innovation'>Home</a>
                      <a href='https://www.bitbecoin.com/en_US/login'>About Us</a>
                      <a href='https://www.bitbecoin.com/en_US/market'>Bitbe group</a>
                      <a href='https://www.bitbecoin.com/en_US/trade/ETH_BTC'>IBAF</a>
                      <a href='https://www.bitbecoin.com/en_US/trade/ETH_BTC'>Gallery</a>
                      <a href=' https://futures.bitbecoin.com/en_US/'>Bitbe Defi</a>
                      <a href='https://www.bitbecoin.com/en_US/trade/ETH_BTC'>Contact Us</a>
                      <p><FaCaretDown></FaCaretDown></p>

                    </div>
                    <div className="login_header">
                      <button className="grey_button yellow_button">Login</button>
                      <button className="yellow_button ">Register</button>
                    </div>
                    <div className="func">
                      <h3>Downloads</h3>
                    </div>
                    {/* <GoogleTranslator /> */}
                    </div>
                    {/* </div> */}

                    {/* New block */}
                    <div className="announcement">
                      <div className="anc">
                        <p>LIFE Coin Award Announcement</p>
                        <p>/</p>
                        <p>Announcement of delisting of coins</p>
                      </div>
                      <p><a href="https://www.bitbecoin.com/en_US/trade/ETH_BTC">More..</a></p>
                    </div>
            </nav>
  )
}

export default NavbarComp;


            