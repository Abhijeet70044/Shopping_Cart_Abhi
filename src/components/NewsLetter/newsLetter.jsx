import React from 'react'
import './newsLetter.css';

const NewsLetters=() =>{
  return (
    <div className="newsletter">
        <h1>Get Exclusive offers on Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder="Your Email id" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetters; 