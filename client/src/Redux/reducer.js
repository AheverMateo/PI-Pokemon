import {GET_ALL_POKEMONS, GET_NAME_POKEMONS, FILTER_CREATE, GET_TYPE_POKEMONS, FILTER_TYPE, FILTER_ORDER, FILTER_ATTACK, POST_POKEMON, GET_DETAIL} from "./actions"


const initialState = {
    Pokemons : [],
    replicPokemon: [],
    allTypes: [],
    details: []
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
        case POST_POKEMON:
            return{
                ...state
            }
        case GET_DETAIL:
            return {
                ...state,
                details: action.payload
            }
        case FILTER_TYPE :
            const filterTypes = action.payload === "All" ? state.replicPokemon 
            : state.replicPokemon.filter(el => el.type?.includes(action.payload))
            return {
                ...state,
                Pokemons: filterTypes
            }
        case FILTER_CREATE:
            const createState = [...state.replicPokemon]
            const createdFilter =
                action.payload === "created"
                ? createState.filter((el) => el.createInDb === true)
                : action.payload === "all"
                ? createState
                : createState.filter((el) => el.createInApi === false);
            return {
                ...state,
                Pokemons: createdFilter,
            };
        case FILTER_ORDER:
            const sortedPokemons = [...state.Pokemons];
            let allPokemon = [...state.replicPokemon]
            const filterByOrder =
              action.payload === "asc"
                ? sortedPokemons.sort((a, b) => a.name.localeCompare(b.name))
                : action.payload === "des"
                ? sortedPokemons.sort((a, b) => b.name.localeCompare(a.name))
                : allPokemon;
            return {
                ...state,
                Pokemons: filterByOrder,
            };
              
        case FILTER_ATTACK :
            const sortedAttack = [...state.Pokemons]
            let allPokemonAtc = [...state.replicPokemon]
            const filterByAttack = 
            action.payload === "asc" 
            ? sortedAttack.sort((a, b) => b.attack - a.attack)
            : action.payload === "des"
            ? sortedAttack.sort((a, b) => a.attack - b.attack)
            : allPokemonAtc
            return {
                ...state,
                Pokemons: filterByAttack
            }
        default:
            return{
                ...state,
            }
    }
}
export default rootReducer