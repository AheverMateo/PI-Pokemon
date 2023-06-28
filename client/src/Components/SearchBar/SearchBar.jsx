import { useState } from "react"
import {useDispatch} from "react-redux"
import { getNamePokemons } from "../../Redux/actions"

function SearchBar() {
    const [name , setName] = useState("")
    const dispatch = useDispatch()

    const handlerName = (e) =>{
        setName(e.target.value)
    }
    
    const handlerSubmit = (e) =>{
        e.preventDefault()
        if (name.length > 1) {
            dispatch(getNamePokemons(name))
        } else {
            alert("No ingreso nada en la busqueda")
        }
    }

    return (
    <div>
        <input
         type="text" 
         placeholder="Buscar Pokemon" 
         value={name}
         onChange={(e) => handlerName(e)}
         />
        <button onClick={(e) => handlerSubmit(e)} >Buscar</button>
    </div>
  )
}

export default SearchBar