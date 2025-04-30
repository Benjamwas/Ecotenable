import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Components/Header'
import React from 'react'
import Navigation from './Components/Navigation'
  
import Home from './Pages/Home'
import Footer from './Components/Footer'
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Services from './Pages/Services'


function App() {
  return(
    <Router>
    <div className='App'>
      <Header />
      <div className="mt-16">
      <Navigation />
     
      <Services />
      
      
      </div>

    </div>
    </Router>
  )
  
}

export default App
