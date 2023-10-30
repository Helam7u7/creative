import React from 'react'
import './Content.css'
import { Link } from 'react-router-dom'
const Content = () => {
  return (
    <div className='container_pack'>
      <div className='pack pack_digital'>
        <h2>Área de Contenido Digital</h2>
        <div className='pack_card'>
          <div className='card'>
            <div className='card_img show'><img src="/img/packD/paqueteT1.png" alt="" /></div>
            <div className='card_img ocult'><img src="/img/packD/Paquete1.png" alt="" /></div>
            <h3 className='ocult'>PAQUETE BÁSICO</h3>
            <Link className='btnMore redes ocult' to='/paquetes'><span>
              Ver más
            </span></Link>
          </div>
          <div className='card'>
            <div className='card_img show'><img src="/img/packD/paqueteT2.png" alt="" /></div>
            <div className='card_img ocult'><img src="/img/packD/Paquete2.png" alt="" /></div>
            <h3 className='ocult'>PAQUETE CR PLUS</h3>
            <Link className='btnMore redes ocult' to='/paquetes'><span>
              Ver más
            </span></Link>
          </div>
          <div className='card'>
            <div className='card_img show'><img src="/img/packD/paqueteT3.png" alt="" /></div>
            <div className='card_img uni ocult'><img src="/img/packD/Paquete3.png" alt="" /></div>
            <h3 className='ocult'>PAQUETE UNIVERSITARIO</h3>
            <Link className='btnMore redes ocult' to='/paquetes'><span>
              Ver más
            </span></Link>
          </div>
        </div>
      </div>
      <div className='pack pack_web'>
        <h2>Área de Contenido Web</h2>
        <div className='pack_card'>
          <div className='card'>
            <div className='card_img'><img src="/img/packW/Tableta1.png" alt="" /></div>
            <h3>WEB LITE</h3>
            <Link className='btnMore web' to='/paquetes'><span>
              Ver más
            </span></Link>
          </div>
          <div className='card'>
            <div className='card_img'><img src="/img/packW/Tableta2.png" alt="" /></div>
            <h3>WEB GENIUS</h3>
            <Link className='btnMore web' to='/paquetes'><span>
              Ver más
            </span></Link>
          </div>
          <div className='card'>
            <div className='card_img'><img src="/img/packW/Tableta3.png" alt="" /></div>
            <h3>WEB PIXEL PERFECT</h3>
            <Link className='btnMore web' to='/paquetes'><span>
              Ver más
            </span></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content