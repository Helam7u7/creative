import Content from '../Content/Content'
import MiniPack from '../MiniPack/MiniPack'
import React from 'react'
import './Body.css'

const Body = () => {
  return (
    <div className='body'>
      <Content/>
      <MiniPack/>
    </div>
  )
}

export default Body