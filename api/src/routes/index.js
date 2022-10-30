const { Router } = require('express');
const axios = require('axios');
const { getAllPokemons,
    getOnePokemon,
    getPokemonsName
} = require('../controllers/pokemonControllers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons', getAllPokemons);
router.get('/pokemons/:id', getOnePokemon);
router.get('/pokemons?name=',getPokemonsName)
// router.post('/pokemons',postPokemon)

module.exports = router;
