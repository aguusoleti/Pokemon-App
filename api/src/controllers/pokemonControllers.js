const axios = require('axios')

const pokemon = [];
const getAllPokemons = async (req, res, next) => {
    const { name } = req.body

    try {

        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        
        res.send({
            'name': data.name,
            'id': data.id,
            'type':data.types.map(element=>element.type.name),
            'image':data.sprites.front_default,
            
        })
    } catch (error) {
        next(error)
    }
}
const getOnePokemon= async(req,res,next)=>{
    const {id} = req.params
    try {

        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        
        res.send({
            'name': data.name,
            'id': data.id,
            'type':data.types.map(element=>element.type.name),
            'image':data.sprites.front_default,
            'hp':data.stats[0].base_stat,
            'attack':data.stats[1].base_stat,
            'defense':data.stats[2].base_stat,
            'speed':data.stats[5].base_stat,
            'height': data.height,
            'weight': data.weight,
        })
    } catch (error) {
        next(error)
    }
}
const getPokemonsName = async (req,res,next)=>{
    const {name} = req.query.substr(14)
   console.log('soy el name '+ name)
// const name=pikachu;

    try {

        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        res.send({
            'name': data.name,
            'id': data.id,
            'type':data.types.map(element=>element.type.name),
            'image':data.sprites.front_default,
            'hp':data.stats[0].base_stat,
            'attack':data.stats[1].base_stat,
            'defense':data.stats[2].base_stat,
            'speed':data.stats[5].base_stat,
            'height': data.height,
            'weight': data.weight,
        })
    } catch (error) {
        next(error)
    }
}

// const postPokemon =async (req,res,next)=>{
//     const {name,type,hp,attack,defense,speed,heigth,weight} = req.body
//     try {

//     } catch (error) {
//         next(error)
//     }
// }
module.exports = {
    getAllPokemons,
    getOnePokemon,
    // postPokemon,
    getPokemonsName
}