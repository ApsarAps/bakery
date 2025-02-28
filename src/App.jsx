
import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Footer } from "./component/Footer";
import Home from "./component/Home";
import { Navbar } from "./component/Navbar";

function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>

    </Routes>
    
    <Footer/>
    </Router>
    
    </>
  )
}

export default App
