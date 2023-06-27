import { Route, Routes, Outlet } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage.jsx/Homepage'
import Contact from './components/Contact/Contact'
import Seniors from './components/Seniors/Seniors'
import Cyberpro from './components/Cyberpro/Cyberpro'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Fixed from './components/Fixed/Fixed'

function App() {

  return (
    <div id='app-container'>
      <Routes>
        <Route path='/' element={<div id='outlet-container'><Header /><Fixed /><Outlet /><Footer /></div>}>
          <Route index element={<Homepage />}/>
          <Route path='/cyberpro' element={<Cyberpro />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/seniors' element={<Seniors />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
