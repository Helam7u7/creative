import React,{useState} from 'react'
import './Paquete.css'

const Paquete = () => {
  const [circleRight, setCircleRight] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('Web');

  const handleButtonClick = () => {
    setCircleRight(!circleRight);
  };
  
  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  };
  
  return (
    <div className='paquete'>
      <div className='paquete_btn'>
        <h3 className='btn_txt'>Trimestral</h3>
        <div className={`btn_border ${circleRight ? 'circle-right' : ''}`}
        onClick={handleButtonClick}>
          <div className='btn_circle'></div>
        </div>
        <h3 className='btn_txt'>Anual</h3>
      </div>
      <div className='container_paquete'>
        <div className='card_page'>
          <h2 className={`title ${selectedTitle === 'Web' ? 'selected' : ''}`}
          onClick={() => handleTitleClick('Web')}>Web</h2>
          <h2 className={`title ${selectedTitle === 'Redes' ? 'selected' : ''}`}
          onClick={() => handleTitleClick('Redes')}>Redes</h2>
        </div>
        <div className={`paquete_card ${selectedTitle === 'Web' ? 'web' : 'redes'}`}>
          {selectedTitle === 'Web' && (
            <>
              <div className='card left'>
                <h2 className='card_title'>Web Lite</h2>
                <h2 className='card_price'>S/.160.00</h2>
                <ul className='card_list'>
                  <li>· Dominio .COM (1 año)</li>
                  <li>· 5 Pestañas</li>
                  <li>· Hosting (1 año)</li>
                  <li>· Sitio Web administrable</li>
                  <li>· Optimización</li>
                  <li>· Chat online</li>
                  <li>· Certificado SSL</li>
                  <li>· Carrito de compras</li>
                  <li>· Alta en Buscadores</li>
                  <li>· Diseño Responsive</li>
                  <li>· Gestión archivos multimedia</li>
                  <li>· Hosting y dominio</li>
                  <li>· Cuentas de Correo</li>
                  <li>· Formulario de Contacto</li>
                  <li>· Botón Redes Sociales</li>
                  <li>· Mapa Ubicación Google Maps</li>
                  <li>· Capacitación Inicial por uso</li>
                  <li>· Soporte técnico</li>
                </ul>
              </div>
              <div className='card midle'>
                <h2 className='card_title'>Web Genius</h2>
                <h2 className='card_price'>S/.500.00</h2>
                <ul className='card_list'>
                  <li>· Dominio .COM (1 año)</li>
                  <li>· Landing page</li>
                  <li>· Hosting (1 año)</li>
                  <li>· Sitio Web</li>
                  <li>· Certificado SSL</li>
                  <li>· Optimización</li>
                  <li>· Tienda básica</li>
                  <li>· Alta en Buscadores</li>
                  <li>· Diseño Responsive</li>
                  <li>· Cuentas de Correo</li>
                  <li>· Formulario de Contacto</li>
                  <li>· Botón Redes Sociales</li>
                  <li>· Mapa Ubicación Google Maps</li>
                  <li>· Soporte técnico</li>
                  <li>· Integración WhatsApp</li>
                  <li>· Gestión de archivos multimedia</li>
                  <li>· Hosting y dominio</li>
                </ul>
              </div>
              <div className='card rigth'>
                <h2 className='card_title'>Web Pixel Perfect</h2>
                <h2 className='card_price'>S/.860.00</h2>
                <ul className='card_list'>
                  <li>· Dominio .COM (1 año)</li>
                  <li>· 150 Secciones / Productos</li>
                  <li>· Hosting (1 año)</li>
                  <li>· Sitio web Administrable</li>
                  <li>· Alta en Buscadores</li>
                  <li>· Diseño Responsive</li>
                  <li>· Correos Corporativos</li>
                  <li>· Carrito de compras</li>
                  <li>· Formulario de contacto</li>
                  <li>· Optimización</li>
                  <li>· Gestión archivos multimedia</li>
                  <li>· Hosting y dominio</li>
                  <li>· Certificado SSL</li>
                  <li>· Botón Redes sociales</li>
                  <li>· Botones de Compartir</li>
                  <li>· Capacitación inicial por uso de contenidos</li>
                  <li>· Mapa Ubicación Google Maps</li>
                  <li>· Soporte técnico</li>
                </ul>
              </div>
            </>
          )}
        </div>
        <div className='paquete_card redes'>
        {selectedTitle === 'Redes' && (
          <>
            <div className='card left'>
              <h2 className='card_title'>Paquete Básico</h2>
              <h2 className='card_price'>S/.100.00</h2>
              <ul className='card_list'>
                <li>· Apertura o Rediseño de redes sociales</li>
                <li>· Creación de tu logo</li>
                <li>· Manual de Marca</li>
                <li>· 2 portadas de Facebook</li>
                <li>· Creación de historias destacadas</li>
                <li>· 3 posts semanales (12 al mes)</li>
                <li>· 3 historias semanales (12 al mes)</li>
                <li>· Respuestas programadas</li>
                <li>· Preguntas frecuentes</li>
                <li>· Informe de los anuncios</li>
                <li>· Hashtags estratégicos</li>
                <li>· 1 Campaña Pagada</li>
                <li>· Personificación de tu Chatbot</li>
                <li>· 1 video para tu Marca</li>
                <li>· Link y QR de WhatsApp personalizado</li>
              </ul>
            </div>
            <div className='card midle'>
              <h2 className='card_title'>Paquete CR. Plus</h2>
              <h2 className='card_price'>S/.150.00</h2>
              <ul className='card_list'>
                <li>· Apertura o Rediseño de redes sociales</li>
                <li>· Creación de tu logo</li>
                <li>· Manual de Marca</li>
                <li>· Creación de historias destacadas</li>
                <li>· 2 portadas de Facebook</li>
                <li>· 4 posts semanales (16 al mes)</li>
                <li>· 4 historias semanales (16 al mes)</li>
                <li>· Respuestas programadas</li>
                <li>· Preguntas frecuentes</li>
                <li>· Informe de los anuncios</li>
                <li>· Hashtags estratégicos</li>
                <li>· 2 Campañas Pagadas</li>
                <li>· Personificación de tu Chatbot</li>
                <li>· 2 videos para tu Marca</li>
                <li>· Botones en Facebook (Tienda, Pedidos, Agenda de cita)</li>
                <li>· Link y QR de WhatsApp personalizado</li>
                <li>· Catálogo y diseño de tarjeta para tu negocio</li>
              </ul>
            </div>
            <div className='card rigth'>
              <h2 className='card_title'>Paquete Universitario</h2>
              <h2 className='card_price'>S/.450.00</h2>
              <ul className='card_list'>
                <li>· Universidad Roosevelt</li>
                <li>· Servicios para tu Proyecto social:</li>
                <ul>
                  <li>· 4 Posts</li>
                  <li>· 6 Flayers</li>
                  <li>· 2 Podcast</li>
                  <li>· 2 Encuestas en Forms</li>
                  <li>· 1 logotipo para tu grupo</li>
                  <li>· Creación de una cuenta de YouTube</li>
                </ul>
                <li>· Beneficios:</li>
                <ul>
                  <li>· Disposición de 24/7 para las correcciones o sugerencias para su contenido</li>
                  <li>· Descuento del 10%</li>
                  <li>· Regalo económico de 10 soles por referido</li>
                </ul>
              </ul>
            </div>
          
          </>
        )}
        </div>
      </div>
    </div>
  )
}

export default Paquete