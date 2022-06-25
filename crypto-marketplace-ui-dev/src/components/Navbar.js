import React,{useState} from "react";
import "../App.css";
import header_logo from "../assets/header_logo.png"
import night_mode from "../assets/night_mode.png"
import day_mode from "../assets/brightness.png"
import './Navbar.css';
import { ThemeContext } from "../components/Context.js";
import { useContext } from "react";


const NavbarComp = () => {
  const {theme,setTheme} = useContext(ThemeContext);
  
  
  
  const[icon,setIcon]=useState(night_mode)
 const toggleTheme=()=>{
    theme===1?setTheme(0):setTheme(1);
   if(theme===1)
   {
    setIcon(night_mode)
   }
    
   
   if(theme===0){
   setIcon(day_mode)
   }
    
  }
    return (
     
            <div className="navbar">
              <div className={theme?"dark-header":"header"}>
                    <div className="logo_header">
                    <img src={header_logo} alt="header_logo" />
                    </div>
                    <div className={theme?"dark-link_header":"link_header"}>
                      <a href='https://www.bitbecoin.com/en_US/innovation'>New Tokens</a>
                      <a href='https://www.bitbecoin.com/en_US/login'>FAQ</a>
                      <a href='https://www.bitbecoin.com/en_US/market'>Market</a>
                      <a href='https://www.bitbecoin.com/en_US/trade/ETH_BTC'>Exchange</a>
                      <a href='https://www.bitbecoin.com/en_US/trade/ETH_BTC'>Buy Crypto</a>
                      <a href=' https://futures.bitbecoin.com/en_US/'>Contract</a>
                      <a href='https://www.bitbecoin.com/en_US/trade/ETH_BTC'>Trade</a>
                    </div>
                    <div className="login_header">
                      <button className={theme?"dark-grey_button yellow_button":"grey_button yellow_button"}>Login</button>
                      <button className="yellow_button ">Register</button>
                    </div>
                    <div className="func">
                      <h3>Downloads</h3>
                      <h3>English(India)</h3>
                      <h3>USD</h3>
                      <img className="toggle" src={icon} onClick={toggleTheme} />
                    
                    </div>
                    {/* </div> */}
              </div>

                    {/* New block */}
                    <div className="announcement">
                      <div className="anc">
                        <p>LIFE Coin Award Announcement</p>
                        <p>/</p>
                        <p>Announcement of delisting of coins</p>
                      </div>
                      <p><a href="https://www.bitbecoin.com/en_US/trade/ETH_BTC">More..</a></p>
                    </div>
            </div>
           
    )
}

export default NavbarComp;