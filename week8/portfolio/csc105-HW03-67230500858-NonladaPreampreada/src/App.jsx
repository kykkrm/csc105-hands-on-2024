import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/home'
import AboutMe from './pages/aboutme'
import Gallery from './pages/gallery'

function App() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <AboutMe/>
      <Gallery/>
    </div>
  )
}

export default App