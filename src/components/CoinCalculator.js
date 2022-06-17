import React from 'react'
import './CoinCalculator.css'

function CoinCalculator() {
  return (
    <div className='calculator'>CoinCalculator
        <div style={{width: "400px", height:"335px", 
        backgroundColor: "#FAFAFA", overflow:"hidden", 
        boxSizing: "border-box", border: "1px solid #56667F", 
        borderRadius: "4px", textAlign: "right", lineHeight:"14px", 
        blockSize:"335px", fontSize: "12px", 
        fontFeatureSettings: "normal", textSizeAdjust: "100%", 
        boxShadow: "inset 0 -20px 0 0 #56667F",margin: "0",
        width: "400px",padding:"1px",padding: "0px", margin: "0px"}}>
            <div style={{height:"315px", padding:"0px", margin:"0px", width: "100%"}}>
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