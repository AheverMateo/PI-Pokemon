const axios = require ("axios");
const {Pokemon, Type } = require("../db");
const { Op } = require("sequelize")

const getApiPokemon = async () =>{
    const dataApi = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')).data.results;
    const pokemonApi = await Promise.all(dataApi.map( async (pokemon) =>{
        const pkm= (await axios.get(pokemon.url)).data;
        return {
        id: pkm.id,
        name: pkm.name,
        life: pkm.stats[0].base_stat,
        attack: pkm.stats[1].base_stat,
        defense: pkm.stats[2].base_stat,
        speed: pkm.stats[5].base_stat,
        height: pkm.height,
        weight: pkm.weight,
        img: pkm.sprites.other.home.front_default,
        type: pkm.types.map((element) => element.type.name),
        createInApi : false
        };
    }));
    return pokemonApi
}

const getBd = async () =>{
    const pokemonBd = await Pokemon.findAll({
        include : {
            model: Type,
            attributes: ['name'],
            through : {
                attributes: [],
            },
        }
    })
    return pokemonBd
}

const getAllPokemons = async () => {
        const apiPokemon = await getApiPokemon ()
        const dbPokemon = await getBd ()
        const allPokemon = apiPokemon.concat(dbPokemon)
        return allPokemon
}

const getNamePokemon = async (name) => {
    const nameBd = await Pokemon.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      },
      include: [{
        model: Type,
        attributes: ["name"],
        through: {
          attributes: []
        }
      }]
    });
  
    if (nameBd.length > 0) {
      return nameBd;
    } else {
        const lowerCaseName = name.toLowerCase()
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${lowerCaseName}`);
      const infoPoke = response.data;
      const pokeName = {
        id: infoPoke.id,
        name: infoPoke.name,
        hp: infoPoke.stats[0].base_stat,
        attack: infoPoke.stats[1].base_stat,
        defense: infoPoke.stats[2].base_stat,
        speed: infoPoke.stats[5].base_stat,
        height: infoPoke.height,
        weight: infoPoke.weight,
        img: infoPoke.sprites.other.home.front_default,
        type: infoPoke.types.map((t) => t.type.name),
      };
  
      return [pokeName];
    }
  };  

const getPokemonId = async (id , source) => {
    if (source === "bdd") {
        return await Pokemon.findByPk(id, {
            include : {
                model: Type,
                attributes: ['name'],
                through : {
                    attributes: [],
                },
            }
        })
    } else if (source === "api") {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const dataId = response.data
            if (!dataId) {
                throw new Error("La ID del juego no fue encontrada")
            }
            return infoId = [{
                id: dataId.id,
                name: dataId.name,
                hp: dataId.stats[0].base_stat,
                attack: dataId.stats[1].base_stat,
                defense: dataId.stats[2].base_stat,
                speed: dataId.stats[5].base_stat,
                height: dataId.height,
                weight: dataId.weight,
                img: dataId.sprites.other.home.front_default,
                type: dataId.types.map((t) => t.type.name),
              }]
        } catch (error) {
            console.error("Error al obtener el Pokemon de la API:", error)
        }
    }
}


module.exports = {getAllPokemons, getNamePokemon, getPokemonId}