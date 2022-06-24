import React from 'react'
// import { Helmet } from 'react-helmet'

const CoinMarquee = () => {
  return (
    <div style={{marginBottom:"10px"}}>
<div style={{height:"62px", backgroundColor: "#FFFFFF", overflow:"hidden", boxSizing: "border-box",
  borderRadius: "4px", textAlign: "right", lineHeight:"14px", blockSize:"62px", 
  fontSize: "12px", fontFeatureSettings: "normal", textSizeAdjust: "100%", boxShadow: "4.7px 9.4px 9.4px hsl(0deg 0% 0% / 0.35)",
  padding:"1px", margin: "0px", width: "100%"}}>
  <div style={{height:"40px", padding:"0px", margin:"0px", width: "100%"}}>
    <iframe title='coinMarquee' src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover=no" 
      width="100%" height="36px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style={{border:"0",margin:"0",padding:"0"}}>
        </iframe>
        </div>
  </div>
</div>
  )
}

export default CoinMarquee