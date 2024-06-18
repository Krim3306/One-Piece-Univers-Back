const {Tome, sequelize} = require('../db/sequelizeSetup')
const { errorHandler } = require('../errorHandler/errorHandler')

const findAllTomes = async(req, res) => {
    console.log(req.query)
    try {
        const result = await Tome.findAll()
        console.log(result);
        res.json({ message: `Il y a ${result.length} tomes`, data: result })
    } catch (error) {
        res.json({ message: `Une erreur est survenue`}) 
        console.log(error);
    }
}

const tomeByPk = async(req, res) => {
    try {
        const result = await Tome.findByPk(req.params.id)
            if (!result) {
                return res.status(404).json({ message: `Ce tome n'existe pas`}) 
            }
        res.json({ message: `Un tome a été trouvé`, data: result })
    } catch (error) {
        res.status(500).json({ message: `Une erreur est survenue`, data: error.message }) 
    }
}

const createTome = async (req, res) => {

    try {
        req.body.UserId = req.user.id
        const createTome = await Tome.create( req.body ); 
        res.status(200).json({ message: `Un tome a bien été ajouté`, data: createTome })
    }
    catch (error) {
        errorHandler(error, res)
    }
}

const updateByPk = async(req, res) => {
    try {
        const result = await Tome.findByPk(req.params.id)
            if (!result) {
                return res.status(404).json({ message: `Ce tome n'existe pas`}) 
            }
        await result.update (
            req.body
        )
            res.status(201).json({ message: 'Le tome a bien été modifié', data: result })
    } catch (error) {
        errorHandler(error, res)
    }
}

const deleteTome = async(req, res) => {
    try {
        const result = await Tome.findByPk(req.params.id)
            if (!result) {
                return res.status(404).json({ message: `Ce tome n'existe pas`}) 
            }
        await result.destroy (
            req.body
        )
        res.status(200).json({ message: 'Le tome a bien été destroy', data: result })
    } catch (error) {
        res.status(500).json({ message: `Une erreur est survenue`, data: error.message }) 
    }
}

module.exports = { findAllTomes, tomeByPk, createTome, updateByPk, deleteTome }