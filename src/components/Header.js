import React from 'react'
import '../css/header.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import About from './navbarcontents/About';
import Home from './navbarcontents/Home';
import Blog from './navbarcontents/Blog';
import Contact from './navbarcontents/Contact';
import Navbar from './navbarcontents/Navbar';

function Header() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );

}

export default Header
