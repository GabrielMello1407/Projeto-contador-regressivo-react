import './App.css'
import { Outlet } from 'react-router-dom'
import Fest from './assets/fest.jpg'



function App() {

  return (
    <div className='App' style={{
      backgroundImage: `url(${Fest})`
    }}>
      <div className="container">
        <Outlet />
      </div>
    </div >
  )
}

export default App
