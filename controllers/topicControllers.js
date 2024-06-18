const {Topic, sequelize} = require('../db/sequelizeSetup')
const { Op } = require("sequelize");
const { errorHandler } = require('../errorHandler/errorHandler')

const findAllTopics = async(req, res) => {
    console.log(req.query)
    try {
        const result = await Topic.findAll()
        res.json({ message: `Il y a ${result.length} topics`, data: result })
    } catch (error) {
        res.json({ message: `Une erreur est survenue`}) 
    }
}

const topicByPk = async(req, res) => {
    try {
        const result = await Topic.findByPk(req.params.id)
            if (!result) {
                return res.status(404).json({ message: `Ce topic n'existe pas`}) 
            }
        res.json({ message: `Un topic a été trouvé`, data: result })
    } catch (error) {
        res.status(500).json({ message: `Une erreur est survenue`, data: error.message }) 
    }
}

const searchTopics = async(req, res) => {
    console.log(req.query)
    try {
        const result = await Topic.findAll({where: { name: {[Op.like]:`%${req.query.name}%`}}})
        res.json({ message: `Il y a ${result.length} topics`, data: result })
    } catch (error) {
        res.json({ message: `Une erreur est survenue`}) 
        console.log(error);
    }
}

const createTopic = async (req, res) => {

    try {
        req.body.UserId = req.user.id
        const createTopic = await Topic.create( req.body ); 
        res.status(200).json({ message: `Un topic a bien été ajouté`, data: createTopic })
    }
    catch (error) {
        errorHandler(error, res)
    }
}

const updateByPk = async(req, res) => {
    try {
        const result = await Topic.findByPk(req.params.id)
            if (!result) {
                return res.status(404).json({ message: `Ce topic n'existe pas`}) 
            }
        await result.update (
            req.body
        )
            res.status(201).json({ message: 'Le topic a bien été modifié', data: result })
    } catch (error) {
        errorHandler(error, res)
    }
}

const deleteTopic = async(req, res) => {
    try {
        const result = await Topic.findByPk(req.params.id)
            if (!result) {
                return res.status(404).json({ message: `Ce topic n'existe pas`}) 
            }
        await result.destroy (
            req.body
        )
        res.status(200).json({ message: 'Le topic a bien été destroy', data: result })
    } catch (error) {
        res.status(500).json({ message: `Une erreur est survenue`, data: error.message }) 
    }
}

module.exports = { findAllTopics, topicByPk, searchTopics, createTopic, updateByPk, deleteTopic }