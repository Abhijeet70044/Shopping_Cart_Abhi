import './footer.css';
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';


const Footer = ()=> {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt='Shopper Stop logo' />
            <p>SHOPPER STOP</p>
        </div>
        <ul className="footer-links">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src ={instagram_icon} alt='instagram'/>
            </div>
            <div className='footer-icons-container'>
                <img src ={pintester_icon} alt='pinterest'/>
            </div>
            <div className='footer-icons-container'>
                <img src ={whatsapp_icon} alt='whatsapp'/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>© 2021 Shopper Stop. All rights reserved.</p>
        </div>
    </div>
  ) 
}

export default Footer