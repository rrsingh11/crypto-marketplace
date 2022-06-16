import React from "react";
import Featured from './components/Featured'
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Signup from './components/Signup'
import Footer from './components/Footer'
// import Chatbot from "./components/chatbot/Chatbot";

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Featured />
    <Signup />
    {/* <Chatbot /> */}
    <Footer />
    </>
  );
}

export default App;
