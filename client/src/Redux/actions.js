import axios from "axios"
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_NAME_POKEMONS = "GET_NAME_POKEMONS"
export const FILTER_CREATE = "FILTER_CREATE"
export const GET_TYPE_POKEMONS = "GET_TYPE_POKEMONS"
export const FILTER_TYPE = "FILTER_TYPE"
export const FILTER_ORDER = "FILTER_ORDER"
export const FILTER_ATTACK = "FILTER_ATTACK"
export const POST_POKEMON = "POST_POKEMON"
export const GET_DETAIL = "GET_DETAIL"
export const CLEAN_DETAIL = "CLEAN_DETAIL"

export const getAllpokemons = ()=>{

    return async (dispatch) =>{
        try {
            const apiData = await axios.get("http://localhost:3001/Pokemon")
            const pokeInfo = apiData.data
            dispatch({type: GET_ALL_POKEMONS, payload: pokeInfo})
        } catch (error) {
            alert(`${error.response.data.error}`)
        }
    }
    
}

export const getDetailPoke = (id) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:3001/Pokemon/${id}`);
        const details = response.data;
        dispatch({ type: GET_DETAIL, payload: details });
      } catch (error) {
        alert(`${error.response.data.error}`)
      }
    };
  };
  

export const getNamePokemons = (name)=>{
    return async (dispatch) =>{
        try {
            const nameData = await axios.get(`http://localhost:3001/Pokemon?name=${name}`)
            const nameInfo = nameData.data
            dispatch({type: GET_NAME_POKEMONS, payload: nameInfo})
        } catch (error) {
            alert(`${error.response.data.error}`)       
        }
    }
}

export const postPokemons = (payload) =>{
    return async () =>{
        try {
            const response = await axios.post(`http://localhost:3001/Pokemon`, payload)
            return {
                type: POST_POKEMON,
                response
            }
        } catch (error) {
            alert(`${error.response.data.error}`)
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
            alert(`${error.response.data.error}`)
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

export const fitlerOrder = (payload) =>{
    return {
        type: FILTER_ORDER,
        payload
    }
}

export const filterByAttack = (payload) =>{
    return {
        type: FILTER_ATTACK,
        payload
    }
}

export const cleanDetail = () =>{
    return { type: CLEAN_DETAIL }
}




