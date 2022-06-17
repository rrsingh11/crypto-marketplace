import React from "react";
import TopBand from "./components/TopBand";
import Featured from './components/Featured'
// import Navbar from "./components/Navbar";
import Home from './components/Home'
import Signup from './components/Signup'
import Footer from './components/Footer'
// import Chatbot from "./components/chatbot/Chatbot";
import Widgets from "./components/Widgets";
import CoinCalculator from "./components/CoinCalculator";
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <>
    <TopBand />
    {/* <Navbar/> */}
    <Home/>
    <Featured />
    <Widgets/>
    <CoinCalculator/>
    <Signup />
    {/* <Chatbot /> */}
    <Testimonials/>
    <Footer />
    </>
  );
}

export default App;
