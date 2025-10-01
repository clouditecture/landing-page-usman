import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Pricing from './pages/Pricing'
import Blogs from './pages/Blogs'
import ContactUs from './pages/ContactUs'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='/blogs' element={<Blogs />}/>
          <Route path='/contact' element={<ContactUs />}/>
       </Routes>

       <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
