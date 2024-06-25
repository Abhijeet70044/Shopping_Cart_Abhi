import React from 'react'
import './descriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews(122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products and services. It provides a convenient and accessible way for customers to browse a wide variety of items, compare prices, read reviews, and make purchases from the comfort of their own homes</p> 
        </div>
    </div>
  )
}
export default DescriptionBox;
 