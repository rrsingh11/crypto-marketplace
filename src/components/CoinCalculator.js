import React from 'react'
import './CoinCalculator.css'

function CoinCalculator() {
  return (
    <div className='calculator'>
    <div className='calc-text'>
      <h1>Coin To Currency</h1>
      <p>
      Calculator determines the exchange rates between major fiat currencies and cryptocurrencies – including BTC, BCH, ETH and XRP to USD, EUR, GBP, IDR and NGN – with up to six decimal places of accuracy.
      </p>
    </div>
        <div className='calc' style={{width: "400px", height:"335px", 
        backgroundColor: "#FAFAFA", overflow:"hidden", 
        boxSizing: "border-box", border: "1px solid #56667F", 
        borderRadius: "4px", textAlign: "right", lineHeight:"14px", 
        blockSize:"335px", fontSize: "12px", 
        fontFeatureSettings: "normal", textSizeAdjust: "100%", 
        boxShadow: "inset 0 -20px 0 0 #56667F",margin: "0",
        width: "400px",padding:"1px",padding: "0px", margin: "0px"}}>
            <div className='calc-in' style={{height:"315px"}}>
                <iframe src="https://widget.coinlib.io/widget?type=converter&theme=light" 
                width="400" height="310px" scrolling="auto" marginwidth="0" 
                marginheight="0" frameborder="0" border="0" 
                style={{border:"0",margin:"0",padding:"0"}}></iframe>
                </div>
                </div>
    </div>
  )
}

export default CoinCalculator