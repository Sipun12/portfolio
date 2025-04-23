import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from './components/Home';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ClickSpark from './components/ClickSpark';
import Footer from "./components/Footer";
// import SplashCursor from './components/SplashCursor'

function App() {
  const [isOpen, setOpen] = useState(true);

  return (
    <Router>
      {/* <SplashCursor /> */}

      <ClickSpark
        sparkColor='#f8ff2b'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer/>
      </ClickSpark>
    </Router>
  );
}

export default App;
