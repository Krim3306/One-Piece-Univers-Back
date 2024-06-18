const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../configs/privatekey')
const { Role, User, Review } = require('../db/sequelizeSetup')
const { errorHandler } = require('../errorHandler/errorHandler')

const rolesHierarchy = {
    user: ['user'],
    admin: ['admin', 'user']
}

const protect = async (req, res, next) => {
    const token = req.cookies.access_token
    if (!token) {
        return res.status(401).json({ message: `Non authentifié`}) 
    }
    try {
        const decoded = jwt.verify(req.cookies.access_token, SECRET_KEY)
        const result = await User.findByPk(decoded.userId, { include: Role })
        if (!result) {
            return res.status(404).json({ message: `Vous n'êtes pas authentifié` })
        }
        req.user = result
        next()
    } catch (error) {
        return res.status(401).json({ message: `Jeton non valide`})
    }
}

const restrictTo = (labelRole) => {
    return async (req, res, next) => {
        try {
            if (!rolesHierarchy[req.user.Role.label].includes(labelRole)) {
                return res.status(403).json({ message: "Droits insuffisants" })
            }
            next()
        } catch (error) {
            errorHandler(error)
        }
    }
}

const restrictToOwnUser = (model) => {
    
    return async (req, res, next) => {
        console.log(req.user.Role.label);
    const result = await model.findByPk(req.params.id)
    try {
        if(!result) return res.status(404).json({message: "Ressource non trouvée"})
        if (rolesHierarchy[req.user.Role.label].includes("admin")) {
            return next()
        }
        if (req.user.id != result.UserId) {
            return res.status(403).json({ message: "Non authorisé" })}
    next()
    } catch (error) {
        errorHandler(error)
        console.log(error)
    }
    }
} 

module.exports = { protect, restrictTo, restrictToOwnUser }