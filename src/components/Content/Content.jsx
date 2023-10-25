import React from 'react'
import './Content.css'
const Content = () => {
  return (
    <div className='container_pack'>
      <div className='pack pack_digital'>
        <h2>Área de Contenido Digital</h2>
        <div className='pack_card'>
          <div className='card'>
            <div className='card_img'><img src="/img/packD/Paquete1.png" alt="" /></div>
            <h3>PAQUETE BÁSICO</h3>
            <span className='btnMore'>
              Ver más
            </span>
          </div>
          <div className='card'>
            <div className='card_img'><img src="/img/packD/Paquete2.png" alt="" /></div>
            <h3>PAQUETE CR PLUS</h3>
            <span className='btnMore'>
              Ver más
            </span>
          </div>
          <div className='card'>
            <div className='card_img uni'><img src="/img/packD/Paquete3.png" alt="" /></div>
            <h3>PAQUETE UNIVERSITARIO</h3>
            <span className='btnMore'>
              Ver más
            </span>
          </div>
        </div>
      </div>
      <div className='pack pack_web'>
        <h2>Área de Contenido Web</h2>
        <div className='pack_card'>
          <div className='card'>
            <div className='card_img'><img src="/img/packW/Tableta1.png" alt="" /></div>
            <h3>WEB LITE</h3>
            <span className='btnMore'>
              Ver más
            </span>
          </div>
          <div className='card'>
            <div className='card_img'><img src="/img/packW/Tableta2.png" alt="" /></div>
            <h3>WEB GENIUS</h3>
            <span className='btnMore'>
              Ver más
            </span>
          </div>
          <div className='card'>
            <div className='card_img'><img src="/img/packW/Tableta3.png" alt="" /></div>
            <h3>WEB PIXEL PERFECT</h3>
            <span className='btnMore'>
              Ver más
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content