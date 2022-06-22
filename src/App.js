import React from "react";
import TopBand from "./components/TopBand";
import NavbarComp from './components/Navbar'
import Featured from './components/Featured'
// import Navbar from "./components/Navbar";
import Home from './components/Home'
import Signup from './components/Signup'
import Footer from './components/Footer'
// import Chatbot from "./components/chatbot/Chatbot";
import CoinTable from "./components/Widgets";
// import CoinCalculator from "./components/CoinCalculator";
import Testimonials from "./components/Testimonials"
import PreFooter from "./components/PreFooter";

function App() {
  return (
    <>
    <TopBand />
    {/* <Navbar/> */}
    <NavbarComp/>
    <Home/>
    <Featured />
    <CoinTable/>
    {/* <CoinCalculator/> */}
    <Signup />
    {/* <Chatbot /> */}
    <Testimonials/>
    <PreFooter/>
    <Footer />
    </>
  );
}

export default App;
