const { User } = require("../db/sequelizeSetup")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require("../configs/privatekey")

const login = async (req, res) => {

    try {
        const result = await User.scope('withPassword').findOne({ where: { username: req.body.username } })
            if (result === null) {
                return res.status(404).json({ message: `Invalid Credentials`}) 
            }

        const isCorrect = await bcrypt.compare(req.body.password, result.password)
            if (!isCorrect) {
                return res.status(400).json({ message: `Invalid Credentials`})
            }

    const token = jwt.sign({ userId: result.id, role: result.RoleId }, SECRET_KEY, { expiresIn: '7d' });
        res.cookie("access_token", token).json({ message: "Connexion réussi" })
    } catch (error) {
        res.status(500).json({ message: `Une erreur est survenue` })
    }
} 

const logout = async (req, res) => {
    res.clearCookie('access_token')
    res.json({ message: `Vous êtes déconnecté`})
} 

module.exports = {login, logout}