const {getAllPokemons, getNamePokemon, getPokemonId} = require ("../controllers/controllerPokemon")
const {Pokemon, Type } = require("../db")


const getHandlersPokemon = async (req, res) =>{
    const {name} = req.query
    try {
        if (name) {
            let byName = await getNamePokemon (name)
              res.status(200).send(byName)
        }else{
            let allPoke = await getAllPokemons ()
            res.status(200).send(allPoke)
        }
    } catch (error) {
        res.status(500).send("Error al obtener los pokemons")
    }
}

const getHandlersPokemonId = async (req, res) =>{
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const pokemonId = await getPokemonId(id, source);
        res.status(200).json(pokemonId);
    } catch (error) {
        res.status(404).send({error: error.message});
    }
}

const postHandlersPokemon = async (req, res) => {
    const { 
      name,
      life, 
      attack, 
      defense, 
      speed, 
      height, 
      weight, 
      img,
      type, 
      createInDb,    
    } = req.body;
    
    try {
      const pokemonCreated = await Pokemon.create({ name, life, attack, defense, speed, height, weight, img, createInDb });
      
      const types = await Type.findAll({
        where: { name: type }
      });
  
      await pokemonCreated.addTypes(types);
      const pokemonTypes = await pokemonCreated.getTypes();
      const typeNames = pokemonTypes.map((type) => type.name);
  
      res.status(201).json({ ...pokemonCreated.toJSON(), types: typeNames });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  
module.exports = {
    getHandlersPokemon,
    getHandlersPokemonId,
    postHandlersPokemon
}