import React from "react";
import Featured from './components/Featured'
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Signup from './components/Signup'
// import FooterComp from './components/Footer'
// import Chatbot from "./components/chatbot/Chatbot";
import Widgets from "./components/Widgets";
import CoinCalculator from "./components/CoinCalculator";
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Featured />
    <Widgets/>
    <CoinCalculator/>
    <Signup />
    {/* <Chatbot /> */}
    <Testimonials/>
    {/* <FooterComp /> */}
    </>
  );
}

export default App;
