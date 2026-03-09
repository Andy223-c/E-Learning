import React from 'react'
import Header from './components/Header'
import Hero from './pages/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Courses from './pages/Courses'
import About from './pages/About'
import Contect from './pages/Contect'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contect/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
