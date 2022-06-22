import React from 'react'
import './Home.css'
// import Crypto from '../assets/hero-img.png'

const Home = () => {
    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p>Buy & Sell 600+ cryptos using Bitbe</p>
                    <h1>Invest in Cryptocurreny with Bibte Exchange</h1>
                    <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        {/* <img src={Crypto} alt=''/> */}
                        <div className='calc' style={{
                            width: "400px", height:"335px", 
                            backgroundColor: "#FAFAFA", 
                            overflow:"hidden", 
                            boxSizing: "border-box",
                            borderRadius: "4px", 
                            textAlign: "right", 
                            lineHeight:"14px", 
                            blockSize:"335px", 
                            fontSize: "12px", 
                            fontFeatureSettings: "normal", 
                            textSizeAdjust: "100%", 
                            width: "400px",
                            padding: "0px", 
                            margin: "0px"
                            }}>
                             <div className='calc-in' style={{height:"315px"}}>
                                 <iframe src="https://widget.coinlib.io/widget?type=converter&theme=light" 
                                  width="400" height="310px" scrolling="auto" marginwidth="0" 
                                 marginheight="0" frameborder="0" border="0" 
                                  style={{border:"0",margin:"0",padding:"0"}}></iframe>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home