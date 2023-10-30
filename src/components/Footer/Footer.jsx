import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_inf'>
        <div className='inf inf_services'>
          <h3 className='inf_title'>Servicios</h3>
          <p>Área de Contenido Digital</p>
          <p>Área de Contenido Web</p>
        </div>
        <div className='inf inf_contact'>
          <h3 className='inf_title'>Contacto</h3>
          <p>Cel/Whapp: +51 999 999 999</p>
          <p>Email: agenciacreativeperu@gmail.com</p>
        </div>
      </div>
      <div className='footer_map'>
        <div><img src="/svg/mapa.png" alt="" /></div>
      </div>
      <div className='footer_wsp'>
        <div className='qr'><img src="/svg/qr.png" alt="" /></div>
        <div className='btn'><img src="/svg/btnwsp.png" alt="" /></div>
      </div>
    </div>
  )
}

export default Footer