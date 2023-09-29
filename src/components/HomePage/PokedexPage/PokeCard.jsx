import { useEffect } from "react"
import useFetch from "../../../hooks/useFetch"
import { useNavigate } from "react-router-dom"

const PokeCard = ( { url } ) => {

   const [ pokemon, getPokemon ] = useFetch(url)

   const navigate = useNavigate()

    useEffect(() => {
        getPokemon()
    }, [])

    

 const handleNavigate = () => {
    navigate(`/pokedex/${pokemon.id}`)
 }

  return (
    
    <article className="resident" onClick={handleNavigate}>
        <img className="pokedex2" src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png' />
        <header className="resident_header">
            <img className="resident_image" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className="resident_body">
            <h3 className="resident_name">{pokemon?.name}</h3>
            <ul className="indefinido">
                {
                pokemon?.types.map(typeInfo => (
                    <li key={typeInfo.type.url}> type: {typeInfo.type.name}</li>
                ))
                }
            </ul>
            <hr className="resident_separator"/>
            <ul className="resident_list">
                {
                    pokemon?.stats.map(statInfo => (
                        <li className="resident_item" key={statInfo.stat.url}>
                            <span className="resident_label" >{statInfo.stat.name}</span>
                            <span className="resident_label2">{statInfo.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default PokeCard