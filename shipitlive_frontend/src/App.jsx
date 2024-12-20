import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'    
import { useDispatch, useSelector } from "react-redux";   
import AppBar from "./components/AppBar.jsx";
import DiagonalBar from "./components/DiagonalBar.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <Router>
    <div className="h-full px-64 font-open-sans p-6 dark:bg-darkMode-background bg-background">
      <DiagonalBar/>
      <AppBar />
      <Footer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
