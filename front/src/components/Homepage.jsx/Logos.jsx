import React from 'react'
import './Homepage.css'
import Atidim from './../../media/logos/atidim.png'
import Combat from './../../media/logos/combat-to-hightech.png'
import CyberPro from './../../media/logos/cyber-pro.png'
import Technion from './../../media/logos/technion.png'
function Logos() {
  return (
    <div className='logos-container'>
        <img className='logo-home' src={Atidim} alt="" />
        <img className='logo-home' src={Combat} alt="" />
        <img className='logo-home' src={CyberPro} alt="" />
        <img className='logo-home' src={Technion} alt="" />
    </div>
  )
}

export default Logos