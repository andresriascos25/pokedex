import React from 'react'
import { Link } from 'react-router-dom'
import './styles/pokemon404.css'

const Pokemon404 = () => {
  return (
    <>
      <section className='card-error'>
        <img className='card-error__img' src="https://emoji.gg/assets/emoji/8694_pikachu_sad.png" alt="" />
        <div className='card-error__text'>Pokemon not Found</div>
        <Link className='card-error__link' to='/pokedex'>Return to Pokedex</Link>
      </section>
    </>
  )
}

export default Pokemon404