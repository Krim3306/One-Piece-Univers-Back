const { where, Model } = require("sequelize")
const { Review, User } = require("../db/sequelizeSetup")
const { errorHandler } = require("../errorHandler/errorHandler")

const findAllReviews = async (req, res) => {
    try {
        const result = await Review.findAll()
        res.json({ message: `All Review`, data: result})
    } catch (error) {
        errorHandler(error, res)
    }
}

const findReviewByPk = async (req, res) => {
    try {
        const result = await Review.findByPk(req.params.id)
        res.json({ message: `Commentaire n°${req.params.id}`, data: result})
    } catch (error) {
        errorHandler(error, res)
    }
}

const findReviewByTopic = async (req, res) => {
    const TopicId = req.params.TopicId
    try {
        const result = await Review.findAll({
            where: { TopicId: TopicId},
            include: [
                {
                    model: User,
                    attributes: ['username']
                }]
        });
        if (!result || result.lenght === 0) {
            return res.status(404).json({message: 'Aucun commentaire trouvé'});
        }
        return res.status(200).json(result);
    } catch (error) {
        errorHandler(error, res)
    }
}

const createReview = async (req, res) => {
    try {
        console.log(req.body)
        req.body.UserId = req.user.id
        const newReview = await Review.create( req.body );
        res.json({message: `Review creation`, data: newReview})
    } catch (error) {
        console.log(error);
        errorHandler(error, res)
    }
}

const updateReview = async(req, res) => {
    try {
        const result = await Review.findByPk(req.params.id)
            if (!result) {
                return res.status(404).json({ message: `Ce commentaire n'existe pas`}) 
            }
        await result.update (
            req.body
        )
            res.status(201).json({ message: 'Le commentaire a bien été modifié', data: result })
    } catch (error) {
        console.log(error)
        errorHandler(error, res)
    }
}

const deleteReview = async(req, res) => {
    try {
        const result = await Review.findByPk(req.params.id)
            if (!result) {
                return res.status(404).json({ message: `Ce commentaire n'existe pas`}) 
            }
        await result.destroy (
            req.body
        )
        res.status(200).json({ message: 'Le commentaire a bien été destroy', data: result })
        } catch (error) {
        res.status(500).json({ message: `Une erreur est survenue`, data: error.message }) 
    }
}

module.exports = { createReview, updateReview, deleteReview, findAllReviews, findReviewByPk, findReviewByTopic }