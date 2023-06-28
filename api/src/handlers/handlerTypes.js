const axios = require("axios")
const {Type} = require("../db")

const handlersTypes = async (req, res) =>{
    try {
        const apiTypes = await axios.get(`https://pokeapi.co/api/v2/type`)
        const types = apiTypes.data.results.map(el => el.name)
        types.forEach(e => {
            Type.findOrCreate ({
                where: {name: e}
            })
        });
        const alltypes = await Type.findAll()
        res.json(alltypes)
        
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}

module.exports = handlersTypes