import React from 'react'
import Logo from '../assets/farmarcia.png'
import './Header.css'

function Header() {
  return (
    <div className="intro">
      <h1>Bem vindo a</h1>
      <img src={Logo}/>
    </div>
  )
}

export default Header
