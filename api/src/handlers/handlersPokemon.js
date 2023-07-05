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
        res.status(500).send({error: error.message})
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
    if (!name || !life || !attack || !defense || !speed || !height || !weight || !img || !type) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    if (life < 0 || attack < 0 || defense < 0 || speed < 0 || height < 0 || weight < 0) {
      return res.status(400).json({ error: 'Invalid field values' });
    }

    const existPoke = await Pokemon.findOne({ where: {name}})
    if (existPoke) {
        return res.status(404).send("Pokemon already exists")
    }
    const pokemonCreated = await Pokemon.create({ name, life, attack, defense, speed, height, weight, img, createInDb });

    const types = await Type.findAll({
      where: { name: type }
    });

    await pokemonCreated.addTypes(types);

    const typeNames = types.map((type) => type.name);

    res.status(201).json({ ...pokemonCreated.toJSON(), Types: typeNames });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



  
  
module.exports = {
    getHandlersPokemon,
    getHandlersPokemonId,
    postHandlersPokemon
}