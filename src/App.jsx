import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home/Home'
import _404Page from './Components/404Page/404Page'
import SignUp from './Auth/SignUp'
import Checkout from './Components/Checkout/Checkout'
import Admin from './Admin/Admin'
import Products from './Components/Products/Products'
import ProductPage from './Components/ProductLists/ProductPage'
import Sellwithus from './Sellwithus/Sellwithus'
import Nav from './Components/Nav/Nav'
import { useState } from 'react'
import FooterSection from './components/Sections/FooterSection/FooterSection'
import SellerSignUp from './Auth/SellerSignUp'
import SellerDash from './Sellwithus/SellerDash/SellerDash'

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation()

const dontShow = location.pathname === "/signup" || location.pathname === "/sellersignup"
  return (
    <>
      <div className="ark">
         {!dontShow && <Nav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
          <Routes>
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/sellersignup' element={<SellerSignUp />} />
            <Route path='/' element={<Home searchQuery={searchQuery} />} />
            <Route path='/404page' element={<_404Page searchQuery={searchQuery} />} />
            <Route path='/products' element={<Products searchQuery={searchQuery} />} />
            <Route path='/cart/checkout' element={<Checkout searchQuery={searchQuery} />} />
            <Route path='/productpage' element={<ProductPage searchQuery={searchQuery} />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/sellwithus' element={<Sellwithus searchQuery={searchQuery} />} />
            <Route path='/sellerdashboard' element={<SellerDash searchQuery={searchQuery} />} />
          </Routes>
          <FooterSection />
      </div>
    </>
  )
}

export default App
