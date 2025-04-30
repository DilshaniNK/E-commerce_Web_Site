import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import card_icon from '../Assets/cart_icon.png'

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
            <li onClick={() =>{setMenu("shop")}} >Shop{menu === "shop" ? <hr/> : <></>}</li> 
            <li onClick = {() => {setMenu("mens")}}>Men{menu === "mens" ? <hr/> : <></>}</li> 
            <li onClick={() => {setMenu("womens")}}>Women{menu === "womens" ? <hr/> : <></>}</li> 
            <li onClick={()=>{setMenu("kids")}}>Kinds{menu === "kids" ? <hr/> : <></>}</li> 
        </ul>
        
        {/* navbar login button and cart icon */}
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={card_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>

    </div>
        

      
  )
}

export default Navbar
