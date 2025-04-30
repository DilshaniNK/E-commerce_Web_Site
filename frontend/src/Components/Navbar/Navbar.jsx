import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import card_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    
  return (
    <div className='navbar'>

        {/* navbar logo import */}
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        
        {/* navbar menu items */}
        <ul className="nav-menu">
            <li onClick={() =>{setMenu("shop")}} ><Link style={{textDecoration: 'none' }}to='/'>Shop</Link>{menu === "shop" ? <hr/> : <></>}</li> 
            <li onClick = {() => {setMenu("mens")}}><Link style={{textDecoration: 'none' }}to='/mens'>Men</Link>{menu === "mens" ? <hr/> : <></>}</li> 
            <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration: 'none' }}to='/womens'>Women</Link>{menu === "womens" ? <hr/> : <></>}</li> 
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none' }}to='/kids'>Kinds</Link>{menu === "kids" ? <hr/> : <></>}</li> 
        </ul>
        
        {/* navbar login button and cart icon */}
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={card_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>

    </div>
        

      
  )
}

export default Navbar
