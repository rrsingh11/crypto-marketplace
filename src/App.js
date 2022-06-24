import React from "react";
import TopBand from "./components/TopBand";
import NavbarComp from './components/Navbar'
import Featured from './components/Featured'
// import Navbar from "./components/Navbar";
import Home from './components/Home'
import Signup from './components/Signup'
import Footer from './components/Footer'
import CoinTable from "./components/Widgets";
import Testimonials from "./components/Testimonials"
import PreFooter from "./components/PreFooter";
import CoinMarquee from "./components/CoinMarquee";

function App() {
  return (
    <>
    <TopBand />
    <NavbarComp/>
    <Home/>
    <CoinMarquee/>
    <Featured />
    <CoinTable/>
    <Signup />
    <Testimonials/>
    <PreFooter/>
    <Footer />
    </>
  );
}

export default App;
