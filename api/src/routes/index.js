const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Pokemon = require ("./Pokemon")
const Types = require ("./Types")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemon", Pokemon)
router.use("/type", Types)

module.exports = router;
