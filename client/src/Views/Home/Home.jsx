import Cards from "../../Components/Cards/Cards"
import SearchBar from "../../Components/SearchBar/SearchBar"
import Paginado from "../../Components/Paginado/Paginado"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllpokemons, filterCreated, getTypePokemons, filterByType } from "../../Redux/actions"
const Home = () => {
  const dispatch = useDispatch ();
  const pokemons = useSelector((state) => state.Pokemons)
  const allTypes = useSelector((state) => state.allTypes)
  const [currentPage , setCurrentPage] = useState(1)//guardo en el estado local la pagina actual, que seria 1
  const [ pokemonsPerPage, setPokemonsPerPage] = useState(12) //pongo cuantos pokemones quiero en la pagina
  const indexOfLastPokemons = currentPage * pokemonsPerPage//12
  const indexOfFirstPokemons = indexOfLastPokemons - pokemonsPerPage//0
  const currentPokemons = pokemons.slice(indexOfFirstPokemons, indexOfLastPokemons)

  const paginado = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }

  useEffect (() =>{
    dispatch (getAllpokemons())
    dispatch (getTypePokemons())
  },[dispatch])



  const handlerCreated = (e) => {
    dispatch(filterCreated(e.target.value))
  }

  const handlerType = (e) => {
    dispatch(filterByType(e.target.value))
  }


  return (
    <div>
      <SearchBar/>
      <select onChange={e => handlerCreated(e)}>
        <option value= "all" > All </option>
        <option value="created"> Created </option>
        <option value="api"> Existing </option>
      </select>
        
      <select onChange={e => handlerType(e)}>
        <option value="All"> Type </option>
        {allTypes && allTypes.map (t => {
          return (
            <option key={t.id} value={t.name}>{t.name}</option>
          )
        })}
      </select>


      <Paginado
      pokemonsPerPage={pokemonsPerPage}
      pokemons={pokemons.length}
      paginado={paginado}
      />
      <Cards currentPokemons={currentPokemons}/>
    </div>
  )
}

export default Home