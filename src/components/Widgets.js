import React from 'react'
import { Helmet } from "react-helmet"
import './Widgets.css'


function Widgets() {

  
  return (
    <div className='container-widget'>
      <h1 style={{textAlign:"center",fontSize:"40px"}}>Live Price Chart</h1>
        <div className='graphs'>
            <div className='graph-1'>
             <Helmet>
             <script src="https://crypto.com/price/static/widget/index.js"></script>
             </Helmet> 
              <div
                id="crypto-widget-CoinList"
                data-design="classic"
                data-coin-ids="1,166,136,1120,382,1694,440,20,1986">
              </div>
            
            </div>
            <div className='graph-2'>
              {/* <Helmet>
              <script>
                (function(b,i,t,C,O,I,N) {
                window.addEventListener('load',function() {
                if(b.getElementById(C))return;
                I=b.createElement(i),N=b.getElementsByTagName(i)[0];
                I.src=t;I.id=C;N.parentNode.insertBefore(I, N);
                },false)
                })(document,'script','https://widgets.bitcoin.com/widget.js','btcwdgt');
              </script>
              </Helmet> */}
            {/* <div bw-cash="true" className="btcwdgt-chart"></div> */}
            <div style={{height:"560px", backgroundColor: "#FFFFFF", overflow:"hidden", 
            boxSizing: "border-box", border: "1px solid #56667F", borderRadius: "4px", 
            textAlign: "right", lineHeight:"14px", fontSize: "12px", 
            textSizeAdjust: "100%", boxShadow: "inset 0 -20px 0 0 #56667F",padding:"1px",
            padding: "0px", margin: "0px", width: "100%"}}>
            <div style={{height:"540px", padding:"0px", margin:"0px"}}>
            <iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505" width="100%" height="536px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style={{border:"0",margin:"0",padding:"0",lineHeight:"14px"}}></iframe></div>
            </div>
            </div>
        </div>
        <div className='price-table'>
        <iframe src="https://in.widgets.investing.com/top-cryptocurrencies?theme=darkTheme" width="100%" height="100%" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0"></iframe>
        </div>
    </div>
  )
}

export default Widgets