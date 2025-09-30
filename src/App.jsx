import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Pricing from './pages/Pricing'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pricing' element={<Pricing />}/>
       </Routes>

       <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
