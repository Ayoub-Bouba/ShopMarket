import React, { useContext } from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { TiShoppingCart } from 'react-icons/ti';
import { CartContext } from '../../components/conTaxt/CartConText';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function ProductInfo({ product }) {
    const { cartItems, addToCart } = useContext(CartContext);
    const navigite = useNavigate()
    const isInCart = cartItems.some(i => i.id === product.id);

    const handlAddToCart = () => {
        addToCart(product)
        toast.success(
            <div className="toast_wraper">
                <img src={product.images[0]} alt="" className='toast_img' />
                <div className="toast_content">
                    <strong>{product.title}</strong>
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
        <div className="details_item">
            <h1 className='name'>{product.title}</h1>
            <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
            </div>
            <p className="price"><span>${product.price}</span></p>
            <h5> Availability : <span>{product.availabilityStatus}</span></h5>
            <h5> Brand : <span>{product.brand}</span></h5>
            <p className="desc">{product.description}</p>
            <h5 className='stock'><span>Hurry Up! Only {product.stock} products left is stock .</span></h5>

            <button className={`btn ${isInCart ? 'in_cart' : ''}`} onClick={handlAddToCart}>
                {isInCart ? "Item In Cart" : "Add To Cart"} <TiShoppingCart />
            </button>

            <div className="icons">
                <span>  <CiHeart />  </span>
            </div>
        </div>
    )
}

export default ProductInfo