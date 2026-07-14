import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaShare, FaStar, FaStarHalfAlt, FaCartArrowDown, FaCheck } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CartContext } from '../conTaxt/CartConText';
import { GiDuration } from 'react-icons/gi';
import toast from 'react-hot-toast';

function Product({ items }) {
  const { cartItems, addToCart } = useContext(CartContext);
  const isInCart = cartItems.some(i => i.id === items.id);

  const navigite = useNavigate()

  const handlAddToCart = () => {
    addToCart(items)
    toast.success(
      <div className="toast_wraper">
        <img src={items.images[0]} alt="" className='toast_img' />
        <div className="toast_content">
          <strong>{items.title}</strong>
          added to cart
          <div>
            <button className="btn" onClick={() => navigite('/cart')}>View Cart</button>
          </div>
        </div>
      </div>
      , { duration: 3500 }
    )
  }

  return (
    <div className={`product ${isInCart ? 'in_cart' : ''}`}>
      <Link to={`/products/${items.id}`}>
        <span className='status_cart'>
          <FaCheck /> in cart
        </span>
        <div className="img_product">
          <img src={items.images[0]} alt="" />
        </div>
        <p className="name_product">
          {items.title}

        </p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <p className="price"><span>${items.price}</span></p></Link>
      <div className="icons">
        <span className='add_toCart' onClick={handlAddToCart}>  <FaCartArrowDown />  </span>
        <span>  <CiHeart />  </span>
        <span>  <FaShare />  </span>
      </div>
    </div>
  )
}

export default Product