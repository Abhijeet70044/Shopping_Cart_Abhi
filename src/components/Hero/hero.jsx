import React from 'react'
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

import './hero.css';

const Hero=() =>{
  return (
   <div className="hero">
          <div className="hero-left">
              <div>
              <div className="hero-hand-icon">
              <h2>NEW ARRIVALS ONLY</h2>
              </div>
              <div className="hero-hand-icon">
                  <p>new collections</p>
                  <img src={hand_icon} alt="" />
              </div>
              <div className="hero-hand-icon">
                  <p>for everyone</p>
              </div>
              </div>  
              <div className="hero-latest-btn">
              <div>Latest Collection</div>
              <img src={arrow_icon} alt="" />
          </div>
          </div>
     <div className="hero-right"> 
              <img src={hero_image} alt="" />
          </div>
   </div>
    
  )
}

export default Hero;