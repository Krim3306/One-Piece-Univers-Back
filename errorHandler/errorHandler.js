const { UniqueConstraintError, ValidationError } = require("sequelize")

const errorHandler = (error, res, msg) => {
    if (error instanceof UniqueConstraintError) {
        const substrings = error.parent.sqlMessage.split(`'`)
        console.log(substrings)
        const field = substrings[substrings.length - 2].split('_')[1]

        return res.status(400).json({ message: `${field} déjà pris` })
    }
    if (error instanceof ValidationError) {
        return res.status(400).json({ message: error.message })
    }
    console.log(error)
    res.status(500).json({ message: `Une erreur est survenue` })
}

module.exports = { errorHandler }