import React from 'react'
import './productDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useContext } from 'react';
import { ShopContext } from '../../Context/shopContext';

const ProductDisplay = (props) => {
    console.log('ghj',props)
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                {/* <img src={product.image} alt="" /> */}
            </div>
            <div className='productdisplay-img'>
                <img  className="productdisplay-main-img" src={product.image} alt="" />
            </div>
        </div>
        <div className='productdisplay-right'>
            <h2>{product.name}</h2>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(222)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>
                    ${product.old_price}
                </div>
                <div className='productdisplay-right-price-new'>
                    ${product.new_price}
                </div>
            </div>
            <div className='productdisplay-right-description'>
               A lightweight, usually knitted, pullover shirt, close-fitting and 
               a round neckline and short sleeves, worn as an undershirt or outer
               garment. 
            </div>
            <div className='productdisplay-right-sizes'>
                <h1>Select Size</h1>
                <div className='productdisplay-right-size-list'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div> 
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern, Lates</p>

        </div>
    </div>
  )
}

export default ProductDisplay