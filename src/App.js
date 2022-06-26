import React,{useState} from "react";
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
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 5000);
  }
  return (
    !loading &&(

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
    )
  );
}

export default App;
