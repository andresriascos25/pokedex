import React from 'react'
import FormHome from '../components/home/FormHome'
import Footer from '../components/home/Footer'
import './styles/home.css'

const Home = () => {
  return (
    <article className='pokedex'>
      <img className='pokedex__img' src="/images/home/pokedex.png" alt="img" />
      <header className='pokedex__header'>
        <h2 className='pokedex__subtitle'>¡Hi Trainer!</h2>
        <p className='pokedex__text'>Give me your name to see the pokedex</p>
      </header>
      <FormHome />
      <Footer />
    </article>
  )
}

export default Home