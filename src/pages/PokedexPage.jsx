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
    <div >
      <h1 id="segundo"></h1>
      <img className="image1" src="https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67" />
      <h2 id="segundo2"></h2> 
      <p id="secP">¡Hi {trainer}! </p> <p id="terP"> ¡Here you will find your favorite pokemon! </p> 
      <form id="che" onSubmit={handleSearch}>
        <input ref={inputSearch} type="text "/>
        <button>Search</button>
      </form>
      <div id="barra">
      <SelectType 
        setTypeSelected={setTypeSelected}
      />
      </div>
      <div id="separa">
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