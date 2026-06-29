// import { useState } from 'react'

import './App.css'
import Header from './Components.jsx/Header'
import Herosection from './Components.jsx/Herosection';
import Footer from './Components.jsx/Footer';
import Home from './Pages.jsx/Home';
import About from './Pages.jsx/About';

import Contact from './Pages.jsx/Contact';
import Details from './Pages.jsx/Details';
import Tyres from './Pages.jsx/Tyres';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Pages.jsx/AdminDashboard';
function App() {
 

  return (
    <Router>
     <Header/>
    
     <Routes>
       <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="/about" element={<About/>}/>
<Route path="/details" element={<Details/>}/>
<Route path="/tyres"  element={<Tyres/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/admin" element={<AdminDashboard/>}/>
     </Routes>
      <Footer />
    </Router>
  )
}

export default App
