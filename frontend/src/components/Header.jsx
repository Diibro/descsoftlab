import Logo from '../assets/logos/desc_3.png';
import {BiMenuAltLeft} from 'react-icons/bi';
import {FcAbout, FcBriefcase,FcOnlineSupport, FcHome, FcNext} from 'react-icons/fc';
import {NavLink} from 'react-router-dom'
import { useState, useRef } from 'react';

const Header = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef();
  const navRef2 = useRef();
  const handleNav = () =>{
    if(nav){
      navRef.current.style.right = "-220px"; 
      navRef2.current.style.display = "flex"
      setNav(false)
    }else if(!nav){
      navRef.current.style.right = "0%";
      navRef2.current.style.display = "none"
      setNav(true);
    }
  }
  return (
    <div className="Header">
      <div className="nav-container1">
          <i className="menu-icon"><BiMenuAltLeft /></i>
          <ul>
            <li className='li about'><NavLink><span>about</span></NavLink></li>
            <li className='li contact'><NavLink><span>services</span></NavLink></li>
            <li className='li work'><NavLink><span>support</span></NavLink></li>
          </ul>
      </div>
      <div className="logo-container">
        <img src={Logo} alt="Company_logo" />
        <h2>esc Softlab</h2>
      </div>
      <div className="nav-container2">
        <span className="main"><NavLink>Account</NavLink></span>
        <div className="nav">
          <NavLink>sign up</NavLink>
          <NavLink>login</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header;