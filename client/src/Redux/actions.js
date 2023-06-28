import axios from "axios"
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_NAME_POKEMONS = "GET_NAME_POKEMONS"
export const FILTER_CREATE = "FILTER_CREATE"
export const GET_TYPE_POKEMONS = "GET_TYPE_POKEMONS"
export const FILTER_TYPE = "FILTER_TYPE"

export const getAllpokemons = ()=>{
    return async (dispatch) =>{
        const apiData = await axios.get("http://localhost:3001/Pokemon")
        const pokeInfo = apiData.data
        dispatch({type: GET_ALL_POKEMONS, payload: pokeInfo})
    }
    
}

export const getNamePokemons = (name)=>{
    return async (dispatch) =>{
        try {
            const nameData = await axios.get(`http://localhost:3001/Pokemon?name=${name}`)
            const nameInfo = nameData.data
            dispatch({type: GET_NAME_POKEMONS, payload: nameInfo})
        } catch (error) {
            console.log(error)        
        }
    }
}

export const getTypePokemons = () =>{
    return async (dispatch) =>{
        try {
            const typeApi = await axios.get("http://localhost:3001/Type")
            const typeData = typeApi.data
            dispatch({type: GET_TYPE_POKEMONS, payload: typeData})
        } catch (error) {
            console.log(error) 
        }
    }
}

export const filterByType = (payload) => {
    return {
        type: FILTER_TYPE,
        payload
    }
}

export const filterCreated = (payload) =>{
    return {
        type: FILTER_CREATE,
        payload
    }
}




