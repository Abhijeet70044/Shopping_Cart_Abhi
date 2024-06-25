import React, { useContext } from 'react'
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import logo from '../Assets/logo.png';
import { Link } from'react-router-dom';
import { ShopContext } from '../../Context/shopContext';

const Navbar = () => {
  // const [menu, setMenu] = useState('shop');
  const {getTotalCartItems} = useContext(ShopContext )

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='Shopper Stop logo' width="60" height="50" />
            <p>SHOPPER STOP</p>
        </div>
        <ul className="nav-menu">
            <li><Link to='/' style={{textDecoration:"none"}}>SHOP </Link></li>
            <li><Link to='/mens' style={{textDecoration:"none"}}>MENS </Link></li>
            <li><Link to='/womens' style={{textDecoration:"none"}}>WOMENS </Link></li>
            <li><Link to='/kids' style={{textDecoration:"none"}}>KIDS</Link></li>
         </ul>
        <div className='nav-login-cart'> 
             <button>  <Link to='/login' style={{textDecoration:"none"}}>Login</Link></button>
             <Link  to='/cart'> <img src={cart_icon} alt='Shopper Stop logo' width="60" height="50" />
             <div className='nav-cart-count'>{getTotalCartItems() }</div>
             </Link>
        </div>
    </div>   
  )
} 

export default Navbar