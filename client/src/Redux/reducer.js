import {GET_ALL_POKEMONS, GET_NAME_POKEMONS, FILTER_CREATE, GET_TYPE_POKEMONS, FILTER_TYPE} from "./actions"


const initialState = {
    Pokemons : [],
    replicPokemon: [],
    allTypes: [],

}


const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state, 
                Pokemons: action.payload,
                replicPokemon: action.payload
            }
        case GET_TYPE_POKEMONS : 
            return {
                ...state,
                allTypes: action.payload
            }
        case GET_NAME_POKEMONS :
            return {
                ...state,
                Pokemons: action.payload
            }
        case FILTER_TYPE :
            const filterTypes = action.payload === "All" ? state.replicPokemon : state.replicPokemon.filter(el => el.type?.includes(action.payload))
            return {
                ...state,
                Pokemons: filterTypes
            }

        case FILTER_CREATE: 
                const createdFilter = 
                action.payload === "created" ? state.replicPokemon.filter((el)=> el.createInDb === true)
                : action.payload === "all" ? state.replicPokemon
                : state.replicPokemon.filter((el) => el.createInApi === false)
            return {
                ...state,
                Pokemons : createdFilter
            }
        default:
            return{
                ...state
            }
    }

}
export default rootReducer