import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from "react-dom/client"
import CartProvider from './components/conTaxt/CartConText.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <CartProvider>
        <App/>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
