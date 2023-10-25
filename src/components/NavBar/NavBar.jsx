import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='navbar_logo'><Link to='/'><img src="/svg/Isotipo - PNG.png" alt="logo_creative" /></Link></div>
        <div className='navbar_list'>
          <ul className='list_links'>
            <li><Link to='/about' className='list_link'>Nosotros</Link></li>
            <li><Link className='list_link'>Paquetes</Link></li>
            {/* <li><Link className='list_link'>Portafolio</Link></li> */}
            <li><Link className='list_link'>Contáctanos</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar