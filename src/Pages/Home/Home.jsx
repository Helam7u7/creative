import React from 'react'
import Body from '../../components/Body/Body'
import './Home.css'

const Home = () => {
  return (
    <>
      <main className='main'>
        <h1>¡Creando Tu Huella Digital! <span className='change'>Un Click a la Vez</span></h1>
        <div className='banner'><img src="/img/banner/banner.png" alt="" /></div>
      </main>
      <Body/>
    </>
  )
}

export default Home