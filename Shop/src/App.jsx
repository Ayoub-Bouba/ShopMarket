import React from "react"
import { Route, Routes } from "react-router-dom"
import TopHeader from "./components/header/TopHeader"
import BtmHeader from "./components/header/BtmHeader"
import Home from "./page/Home/Home"
import ProductDetails from "./page/ProductDetails/ProductDetails"
import Cart from "./page/cart/Cart"
import { Toaster } from "react-hot-toast"
import ScrollToTop from "./components/ScrollToTop"
import { AnimatePresence } from "framer-motion"
import CategoryPage from "./page/CategoryPage/CategoryPage"
import SearchResult from "./page/search/SearchResult"
function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#e9e9e9',
          borderRedius: '5px',
          padding: '14px'
        }
      }} />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </AnimatePresence>




    </>
  )
}

export default App
