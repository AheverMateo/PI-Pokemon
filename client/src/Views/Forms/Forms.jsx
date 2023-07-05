import style from "./Forms.module.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTypePokemons, postPokemons } from "../../Redux/actions"
import { Link } from "react-router-dom"
import validation from "../../Components/Validation/validation"

const Forms = () => {
  const dispatch = useDispatch ()
  const typePoke = useSelector ((state) => state.allTypes)

  useEffect (() =>{
    dispatch(getTypePokemons())
  },[dispatch])

  const [form, setForm] = useState({
    name: "",
    life: "",
    attack: "", 
    defense: "",
    speed: "", 
    height: "", 
    weight: "", 
    img: "",
    type: []
  })  
  
  const [error, setError] = useState({
    name: "",
    life: "",
    attack: "", 
    defense: "",
    speed: "", 
    height: "", 
    weight: "", 
    img: "",
    type: []
  })



  const handlerChange = (e) =>{
    const property = e.target.name
    const value = e.target.value
    setForm( { ...form, [property]: value } )
    setError( validation({ ...form, [property]: value }) )
  }

  const handlerRadio = (e) => {
    const selectedType = e.target.value
    const selectedTypes = form.type
  
    if (selectedTypes.includes(selectedType)) {
      setError({ ...error, type: "The type has already been selected" })
      return
    }
  
    if (selectedTypes.length >= 2) {
      setError({ ...error, type: "Only up to two types are allowed to be selected" })
      return
    }
  
    setForm({ ...form, type: [...selectedTypes, selectedType] })
    setError({ ...error, type: "" })
  };  
  
  const handlerSubmit = (e) => {
    e.preventDefault()
    
    if ((Object.keys(error).length !== 0) && (form.type.length !== 0)) {
      dispatch(postPokemons(form))
      alert("The pokemon was created!!")
      setForm({
        name: "",
        life: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        img: "",
        type: []
      })
    } else {
      alert("Please fill in all the required fields and select at least one type.")
    }
  }
  

  return (
    <div className={style.formContainer} >
      <div className={style.formPosicion}>
      <Link to = "/home">
        <button className={style.button1}>Back</button>
      </Link>
      <form onSubmit={handlerSubmit} >
        <div>
          <label>Name:</label>
          <input className={style.inputs} type="text" value={form.name} name="name" onChange={handlerChange}/>
          {error.name && <span>{error.name}</span>}
        </div>

        <div>
          <label>Life:</label>
          <input className={style.inputs} type="number" value={form.life} name="life" onChange={handlerChange}/>
          {error.life && <span>{error.life}</span>}
        </div>

        <div>
          <label>Attack:</label>
          <input className={style.inputs} type="number" value={form.attack} name="attack" onChange={handlerChange}/>
          {error.attack && <span>{error.attack}</span>}
        </div>

        <div>
          <label>Defense:</label>
          <input className={style.inputs} type="number" value={form.defense} name="defense" onChange={handlerChange}/>
          {error.defense && <span>{error.defense}</span>}
        </div>

        <div>
          <label>Speed:</label>
          <input className={style.inputs} type="number" value={form.speed} name="speed" onChange={handlerChange}/>
          {error.speed && <span>{error.speed}</span>}
        </div>

        <div>
          <label>Height:</label>
          <input className={style.inputs} type="number" value={form.height} name="height" onChange={handlerChange}/>
          {error.height && <span>{error.height}</span>}
        </div>

        <div>
          <label>Weight:</label>
          <input className={style.inputs} type="number" value={form.weight} name="weight" onChange={handlerChange}/>
          {error.weight && <span>{error.weight}</span>}
        </div>

        <div>
          <label>Image:</label>
          <input type="text" value={form.img} name="img" onChange={handlerChange}/>
          {error.img && <span>{error.img}</span>}
        </div>

        <div>
        {typePoke.map((poke) =>{
          return(
            <label key={poke.id}>
              <input type="radio" value={poke.name} name="type" onChange={handlerRadio} />
              {poke.name}
            </label>
          )
        })}
        {error.type && <p>{error.type}</p>}
        </div>
        <h4>{form.type.map(el => el + " ,")}</h4>
        <button className={style.button2} type="submit">Crear Pokemon</button>
      </form>
      </div>

    </div>
  )
}

export default Forms
