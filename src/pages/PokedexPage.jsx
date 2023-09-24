import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/HomePage/PokedexPage/PokeCard"
import SelectType from "../components/HomePage/PokedexPage/SelectType"


const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')

  console.log(typeSelected)

 const trainer = useSelector(store => store.trainer) 

 const inputSearch = useRef()

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
  const [ pokemons, getPokemons, getTypePokemon ] = useFetch(url)

  useEffect(() => {
   if(typeSelected === 'allPokemons') {
    getPokemons()
   }else {
    getTypePokemon(typeSelected)
   } setInputValue('')
  }, [typeSelected])

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))

  return (
    <div>
      <p>Hi {trainer} </p>
      <form onSubmit={handleSearch}>
        <input ref={inputSearch} type="text "/>
        <button>Search</button>
      </form>
      <SelectType
        setTypeSelected={setTypeSelected}
      />
      <div>
        {
          pokeFiltered?.map(poke => (
            <PokeCard
            key={poke.url} 
            url={poke.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage