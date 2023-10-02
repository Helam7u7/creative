import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='navbar_logo'><img src="/svg/lgCreative.png" alt="logo_creative" /></div>
        <div className='navbar_list'>
          <ul className='list_links'>
            <li className='list_link'>Nosotros</li>
            <li className='list_link'>Paquetes</li>
            <li className='list_link'>Portafolio</li>
            <li className='list_link'>Contáctanos</li>
          </ul>
        </div>
      </div>
      <div className='banner'><img src="/img/banner/bannerCreative.jpg" alt="" /></div>
    </>
  )
}

export default NavBar