import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "./header.css"
import { CartContext } from '../conTaxt/CartConText';
import SearchBox from './SearchBox';
function TopHeader() {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='top_header'>
            <div className="container">
                <Link to="/"><h1>Bouba</h1></Link>
                <SearchBox/>
                <div className="header_icons">
                    <div className="icon">
                        <FaRegHeart />
                        <span className='count'>0</span>
                    </div>
                    <div className="icon">
                        <Link to='/cart'>
                            <TiShoppingCart />
                            <span className='count'>{cartItems.length}</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader