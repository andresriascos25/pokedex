import React from 'react'
import './styles/header.css'

const Header = () => {
  return (
    <header className='header'>
    <div className='header__red'>
    <img className='header__img' src="/images/home/pokedex.png" alt="img" />
    </div>
      <div className='header__black'></div>
      <div className='header__circle'>
        <div className='header__circle-int'></div>
      </div>
  </header>
  )
}

export default Header