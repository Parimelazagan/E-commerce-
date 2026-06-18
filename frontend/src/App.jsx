import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Collections from './pages/Collections'
import About from './pages/About'
import Contact from './pages/Contact'
const App = () => {
  return (
    <div className="px-4 sm:px-5 md:px-7 lg:px-9">   {/* For Responsivenes sm=small ...*/}
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/login" element={<Login/>}/> */}
        <Route path="/collections" element = {<Collections/>}/>
        {/*<Route path = "/orders" element ={<Orders/>} />
        <Route path="/products/:productId" element={<Product/>}/>
        <Route path ="/place-order" element={<PlaceOrder/>} />
        <Route path = "cart" element={<Cart/>}/>*/}
        <Route path = "contact" element = {<Contact/>}/>
        <Route path = "about" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
