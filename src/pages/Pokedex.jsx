import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import Header from '../components/shared/Header'
import './styles/pokedex.css'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')

  useEffect(() => {
    if(typeSelected !== 'All Pokemons'){
      axios.get(typeSelected)
        .then(res => {
          const result =  res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else {
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }
  }, [typeSelected])
  
  const userName = useSelector(state => state.userName)

  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(9)
  const initialPoke = (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage

  return (
    <div className='pokedex-container'>
      <Header />
      <div className='header-container'>
        <section className='pokedex__greeting'>
          <p><span className='pokedex__greeting-name'>Welcome <span>{userName}</span>,</span> here you can find your favorite pokemon</p> 
          <p></p>
        </section>
        <aside className='aside-container'>
          <InputSearch />
          <SelectByType setTypeSelected={setTypeSelected} setPage={setPage} />
        </aside>
        <Pagination 
          page={page}
          pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
          setPage={setPage}
        />
      </div>
      <main>
        <div className='card-container'>
          {
            pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
              <CardPoke
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }
        </div>
      </main>
      <Pagination 
        page={page}
        pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
        setPage={setPage}
      />
    </div>
  )
}

export default Pokedex