import NavBar from './components/NavBar/NavBar'
import './App.css'
import Content from './components/Content/Content'

function App() {

  return (
    <>
    <NavBar/>
    <div className='body'>
      <Content/>
      <img src="/img/banner/bg.png" alt="" />
    </div>
    </>
  )
}

export default App
