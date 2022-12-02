import React from 'react'
import { useNavigate } from 'react-router-dom'

const InputSearch = () => {

  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
  }

  return (
    <form onSubmit={submit} className='inputSearch__form'>
      <input className='inputSearch__input' id='search' type="text" placeholder='Search a pokemon' />
      <button className='inputSearch__btn'>Search</button>
    </form>
  )
}

export default InputSearch