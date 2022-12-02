import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexId/Pokemon404'
import Header from '../components/shared/Header'
import './styles/pokedexById.css'

const PokedexById = () => {

  const { id } = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
  }, [])

  if (hasError) {
    return <Pokemon404 />
  }

  console.log(pokemon)

  return (
    <article className='pokedexById'>
      <Header />
      <article className='pokedexById__section1'>
        <header className={`pokedexById__header bg-${pokemon?.types[0].type.name}`}>
          <img className='pokedexById__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="img" />
        </header>
        <div className='pokedexById__container'>
          <section className='pokedexById__container__header'>
            <h2 className={`pokedexById__id letter-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</h2>
            <h2 className={`pokedexById__name letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
          </section>
          <section className='pokedexById__wh'>
            <div>
              <span className='pokedexById__wh__title'>Weight</span>
              <p className='pokedexById__wh__number'>{pokemon?.weight}</p>
            </div>
            <div>
              <span className='pokedexById__wh__title'>Height</span>
              <p className='pokedexById__wh__number'>{pokemon?.height}</p>
            </div>
          </section>
          <section className='pokedexById__ta'>
            <div className='pokedexById__ta__div'>
              <h2 className='pokedexById__ta__title'>Type</h2>
              <ul>
                {
                  pokemon?.types.map(type => (
                    <li className={`pokedexById__ta__li bg-${pokemon?.types[0].type.name}`} key={type.slot} >{type.type.name}</li>
                  ))
                }
              </ul>
            </div>
            <div className='pokedexById__ta__div'>
              <h2 className='pokedexById__ta__title'>Abilities</h2>
              <ul>
                {
                  pokemon?.abilities.map(ability => (
                    <li className='pokedexById__ta__lia' key={ability.slot} >{ability.ability.name}</li>
                  ))
                }
              </ul>
            </div>
          </section>
          <section>
            <div className='pokedexById__stats'>
              <h2 className='pokedexById__stats__title'>Stast</h2>
              <ul>
                {
                  pokemon?.stats.map(stat => (
                    <li className='pokedexById__stats__list' key={stat.stat.name}>
                      <span className='pokedexById__stats__list__title'>{stat.stat.name}</span>
                      <span className={`letter-${pokemon?.types[0].type.name}`}>{stat.base_stat}/150</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </section>
        </div>
      </article>
      <article className='pokedexById__section2'>
        <h2 className='title'>Movements</h2>
        <div className="container2">
          <ul className='pokedexById__list-moves'>
            {
              pokemon?.moves.map(move => (
                <li className='pokedexById__moves' key={move.move.name} >{move.move.name}</li>
              ))
            }
          </ul>
        </div>
      </article>
    </article>
  )
}

export default PokedexById