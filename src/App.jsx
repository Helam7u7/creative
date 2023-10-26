import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Pack from './Pages/Pack/Pack'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/paquetes' element={<Pack/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
