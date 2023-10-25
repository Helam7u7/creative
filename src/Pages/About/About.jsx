import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
      <h2 className='about_title'>
      Juntos, hacia los <span>mismo objetivos</span>
      </h2>
      <div className='vision_mision'>
        <div><img src="/img/about_img/vision.png" alt="" /></div>
        <div className='txt'>
          <div>
            <h2>Misión</h2>
            <p>Creative Web impulsa la innovación digital y la creatividad a través de soluciones de marketing y diseño web de alta calidad, buscando siempre resultados excepcionales y relaciones duraderas con nuestros clientes.</p>
          </div>
          <div>
            <h2>Visión</h2>
            <p>Creative Web aspira a ser el principal aliado de las empresas peruanas en su éxito digital, proporcionando soluciones creativas y efectivas en marketing digital y diseño web. Nuestro objetivo es liderar el mercado peruano, contribuyendo al crecimiento y la transformación digital de nuestras empresas clientes, y a la prosperidad de Perú y su economía.</p>
          </div>
        </div>
      </div>
      <div className='valores'>
        <div className='valores_grid'>
          <h2>Valores</h2>
          <div className='grid_icons'>
            <div className='icons'>
              <img src="/img/about_img/Compromiso.png" alt="" />
              <h3 className='icon_txt'>Compromiso</h3>
            </div>
            <div className='icons'>
              <img src="/img/about_img/Adaptabilidad.png" alt="" />
              <h3 className='icon_txt'>Adaptabilidad</h3>
            </div>
            <div className='icons'>
              <img src="/img/about_img/Responsabilidad.png" alt="" />
              <h3 className='icon_txt'>Responsabilidad</h3>
            </div>
            <div className='icons'>
              <img src="/img/about_img/Ética.png" alt="" />
              <h3 className='icon_txt'>Ética</h3>
            </div>
          </div>
        </div>
        <div className='main_valores'>
          <img src="/img/about_img/valores.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About