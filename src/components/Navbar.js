import React from "react";
import "../App.css";
import header_logo from "../assets/header_logo.png"
import './navbar.css';

const NavbarComp = () => {
    return (
            <div className="navbar">
              <div className="header">
                    <div className="logo_header">
                    <img src={header_logo} alt="header_logo" />
                    </div>
                    <div className="link_header">
                      <a href='https://www.bitbecoin.com/en_US/innovation'>New Tokens</a>
                      <a href='https://www.bitbecoin.com/en_US/login'>FAQ</a>
                      <a href='https://www.bitbecoin.com/en_US/market'>Market</a>
                      <a href='https://www.bitbecoin.com/en_US/trade/ETH_BTC'>Exchange</a>
                      <a href='https://www.bitbecoin.com/en_US/trade/ETH_BTC'>Buy Crypto</a>
                      <a href=' https://futures.bitbecoin.com/en_US/'>Contract</a>
                      <a href='https://www.bitbecoin.com/en_US/trade/ETH_BTC'>Trade</a>
                    </div>
                    <div className="login_header">
                      <button className="grey_button yellow_button">Login</button>
                      <button className="yellow_button ">Register</button>
                    </div>
                    <div className="func">
                      <h3>Downloads</h3>
                      <h3>English(India)</h3>
                      <h3>USD</h3>
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