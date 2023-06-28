const {Router} = require("express")
const {getHandlersPokemon,getHandlersPokemonId,postHandlersPokemon} = require("../handlers/handlersPokemon")
const Pokemon = Router();

Pokemon.get("/", getHandlersPokemon)
Pokemon.get("/:id", getHandlersPokemonId)
Pokemon.post("/", postHandlersPokemon)

module.exports = Pokemon