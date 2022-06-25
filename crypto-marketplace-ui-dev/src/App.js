import React,{useState} from "react";
import TopBand from "./components/TopBand";
import NavbarComp from './components/Navbar'
import Featured from './components/Featured'
// import Navbar from "./components/Navbar";
import Home from './components/Home'
import Signup from './components/Signup'
import './components/Signup.css'
import Footer from './components/Footer'
// import Chatbot from "./components/chatbot/Chatbot";
import CoinTable from "./components/Widgets";
// import CoinCalculator from "./components/CoinCalculator";
import Testimonials from "./components/Testimonials"
import PreFooter from "./components/PreFooter";
import { ThemeContext } from "./components/Context.js";
import './components/Testimonials.css'
import './components/Featured.css'
import Chat from './components/Chat'


function App() {
  const [theme,setTheme]=useState(0);

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className={theme?"dark-bg":"bg"}>
    <>
    <TopBand />
    {/* <Navbar/> */}
    <NavbarComp/>
    <Home/>
    <Chat/>
    <Featured />
    <CoinTable/>
    {/* <CoinCalculator/> */}
    <Signup />
    {/* <Chatbot /> */}
    <Testimonials/>
    <PreFooter/>
    <Footer />
    </>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
