import Logo from '../assets/logos/desc_3.png';
import {BiMenuAltRight} from 'react-icons/bi';
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
      <div className="logo-container">
        <img src={Logo} alt="Company_logo" />
        <h2>Desc Softlab</h2>
      </div>
      <div className="nav-container">
        <button ref={navRef2} className='nav-bar' onClick={handleNav} ><BiMenuAltRight/></button>
        <div className='nav-menu' ref={navRef}>
          <ul>
            <li className='li home'><NavLink><i><FcHome/></i><span>Home</span></NavLink></li>
            <li className='li about'><NavLink> <i><FcAbout/></i><span>About</span></NavLink></li>
            <li className='li contact'><NavLink><i><FcOnlineSupport/></i><span>Contact us</span></NavLink></li>
            <li className='li work'><NavLink><i><FcBriefcase/></i><span>Work</span></NavLink></li>
          </ul>
          <button  onClick={handleNav} className='close'><FcNext /></button>
        </div>
      </div>
    </div>
  )
}

export default Header;