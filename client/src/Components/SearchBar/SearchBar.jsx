import { useState } from "react"
import {useDispatch} from "react-redux"
import { getNamePokemons } from "../../Redux/actions"
import style from "./Search.module.css"

function SearchBar({paginado}) {
    const [name , setName] = useState("")
    const dispatch = useDispatch()
    const handlerName = (e) =>{
        setName(e.target.value)
    }
    
    const handlerSubmit = (e) =>{
        e.preventDefault()
        if (name.trim() === "") {
        alert("You must enter a name to search");
        }
        dispatch(getNamePokemons(name))
        paginado(1)
    }

    return (
    <div className={style.searchConteiner}>
        <input
        className={style.searchInput}
         type="text" 
         placeholder="search pokemon" 
         value={name}
         onChange={(e) => handlerName(e)}
         />
        <button className={style.buttonSeacrh} onClick={(e) => handlerSubmit(e)} >Search</button>
    </div>
  )
}

export default SearchBar