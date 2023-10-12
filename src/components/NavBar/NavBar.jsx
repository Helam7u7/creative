import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='navbar_logo'><img src="/svg/Isotipo - PNG.png" alt="logo_creative" /></div>
        <div className='navbar_list'>
          <ul className='list_links'>
            <li className='list_link'>Nosotros</li>
            <li className='list_link'>Paquetes</li>
            <li className='list_link'>Portafolio</li>
            <li className='list_link'>Contáctanos</li>
          </ul>
        </div>
      </div>
      <main>
        <h1>¡Creando Tu Huella Digital! <span className='change'>Un Click a la Vez</span></h1>
        <div className='banner'><img src="/img/banner/banner2.jpg" alt="" /></div>
      </main>
    </>
  )
}

export default NavBar