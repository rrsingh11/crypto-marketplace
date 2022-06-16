import React from "react";
import Featured from './components/Featured'
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Signup from './components/Signup'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Featured />
    <Signup />
    <Footer />
    </>
  );
}

export default App;
