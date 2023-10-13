import NavBar from './components/NavBar/NavBar'
import './App.css'
import Content from './components/Content/Content'
import MiniPack from './components/MiniPack/MiniPack'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <NavBar/>
    <div className='body'>
      <Content/>
      <MiniPack/>
    </div>
    <Footer/>
    </>
  )
}

export default App
