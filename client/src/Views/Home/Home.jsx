import style from "./Home.module.css"
import Cards from "../../Components/Cards/Cards"
import Paginado from "../../Components/Paginado/Paginado"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllpokemons, filterCreated, getTypePokemons, filterByType, fitlerOrder, filterByAttack } from "../../Redux/actions"
const Home = () => {
  const dispatch = useDispatch ();
  const pokemons = useSelector((state) => state.Pokemons)
  const allTypes = useSelector((state) => state.allTypes)
  const [currentPage , setCurrentPage] = useState(1)//guardo en el estado local la pagina actual, que seria 1
  const [ pokemonsPerPage, setPokemonsPerPage] = useState(12) //pongo cuantos pokemones quiero en la pagina
  const indexOfLastPokemons = currentPage * pokemonsPerPage
  const indexOfFirstPokemons = indexOfLastPokemons - pokemonsPerPage
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
    setCurrentPage(1)
  }

  const handlerType = (e) => {
    dispatch(filterByType(e.target.value))
    setCurrentPage(1)
  }

  const handlerOrder = (e) =>{
    dispatch(fitlerOrder(e.target.value))

  }

  const handlerAttack = (e) =>{
    dispatch(filterByAttack(e.target.value))
  }

  return (
    <div className={style.homeConteiner}>
      <div className={style.backgroundImage}></div>

      <div className={style.selectConteiner}>
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

        <select onChange={e => handlerOrder(e)}>
          <option value="All">Alphabetical order</option>
          <option value="asc">Upward</option>
          <option value="des">Descending</option>
        </select>
 
        <select onChange={e => handlerAttack(e)}>
          <option value="all">Sort by Attack</option>
          <option value="asc">Upward</option>
          <option value="des">Descending</option>
        </select>
        </div>

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