import React from 'react'
import './Content.css'
const Content = () => {
  return (
    <div className='container_pack'>
      <div className='pack_digital'>
        <h2>Área de Contenido Digital</h2>
        <div className='pack_card'>
          <div className='card'>
            <div><img src="/img/packD/packB.png" alt="" /></div>
            <h3>PAQUETE BÁSICO</h3>
            <span className='btnMore'>
              Ver más
            </span>
          </div>
          <div className='card'>
            <div><img src="/img/packD/packB.png" alt="" /></div>
            <h3>PAQUETE BÁSICO</h3>
            <span className='btnMore'>
              Ver más
            </span>
          </div>
          <div className='card'>
            <div><img src="/img/packD/packU.png" alt="" /></div>
            <h3>PAQUETE BÁSICO</h3>
            <span className='btnMore'>
              Ver más
            </span>
          </div>
        </div>
      </div>
      <div className='pack_digital'>
        <h2>Área de Contenido Web</h2>
        <div className='pack_card'>
          <div className='card'>
            <div><img src="/img/packW/Tableta1.png" alt="" /></div>
            <h3>PAQUETE BÁSICO</h3>
            <span className='btnMore'>
              Ver más
            </span>
          </div>
          <div className='card'>
            <div><img src="/img/packW/Tableta2.png" alt="" /></div>
            <h3>PAQUETE BÁSICO</h3>
            <span className='btnMore'>
              Ver más
            </span>
          </div>
          <div className='card'>
            <div><img src="/img/packW/Tableta3.png" alt="" /></div>
            <h3>PAQUETE BÁSICO</h3>
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