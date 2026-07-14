import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();
function CartProvider({ children }) {


    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : []
    });

    const increaseQuantity = (id) => {
        setCartItems(prevItem => prevItem.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ))
    }

    const decreaseQuantity = (id) => {
        setCartItems(prevItem => prevItem.map(item =>
            item.id === id && item.quantity>1 ? { ...item, quantity: item.quantity - 1 } : item
        ))
    }

    const removeFromCart =(id)=>{
        setCartItems(prevItem=>prevItem.filter(item=>item.id !== id))
    }


    const addToCart = (item) => {
        setCartItems((prevItem) => [...prevItem, { ...item, quantity: 1 }])
    }
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])


    return (
        <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity ,decreaseQuantity,removeFromCart }}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider