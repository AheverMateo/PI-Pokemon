const {Router} = require("express")
const handlersTypes = require("../handlers/handlerTypes")
const Types = Router();

Types.get("/", handlersTypes)

module.exports = Types