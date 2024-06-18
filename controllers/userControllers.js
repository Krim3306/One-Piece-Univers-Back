const {User, Role} = require('../db/sequelizeSetup')
const bcrypt = require('bcrypt')
const { errorHandler } = require('../errorHandler/errorHandler')

const findAllUsers = async(req, res) => {
    try {
        const result = await User.findAll()
        res.json({ message: `Il y a ${result.length} users`, data: result })
    } catch (error) {
        res.json({ message: `Une erreur est survenue`}) 
        console.log(error);
    }
}

const findUserByPk = async(req, res) => {
    try {
        const result = await User.findByPk(req.params.id)
            if (!result) {
                return res.status(404).json({ message: `Cet utilisateur n'existe pas`}) 
            }
        res.json({ message: `Un utilisateur a été trouvé`, data: result })
    } catch (error) {
        res.status(500).json({ message: `Une erreur est survenue`, data: error.message }) 
    }
}

const createUser = async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10)
        req.body.password = hash
        if (req.body.RoleId) {
            return res.status(403).json({message: "Droit insuffisant"})
        }
        const result = await User.create( req.body ); 
        res.json({ message: `Utilisateur créé`, data: result })
    } catch (error) {
        errorHandler(error, res)
    }
}

const findProfile = async (req, res) => {
    try {
        // En supposant que `req.user.id` est l'ID de l'utilisateur dont vous voulez trouver le profil
        const userId = req.user.id;

        // Trouver l'utilisateur par son identifiant, y compris son rôle
        const user = await User.findOne({
            where: { id: userId },
            include: Role
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Hash le mot de passe s'il est fourni dans le corps de la requête
        if (req.body.password) {
            const hash = await bcrypt.hash(req.body.password, 8);
            req.body.password = hash;
        }

        // Vérifier si le RoleId est en cours de modification et renvoyer une erreur si c'est le cas
        if (req.body.RoleId) {
            return res.status(403).json({ message: 'Droit non modifiable' });
        }

        // En supposant que vous souhaitiez envoyer le profil de l'utilisateur en tant que réponse
        return res.status(200).json(user);

    } catch (error) {
        console.error(error);
        errorHandler(error, res);
    }
};

const deleteProfil =async(req, res) => {
    const result = await User.findOne({ where: User.id = req.body.id })
    try {
        if (req.body.password) {
            const hash = await bcrypt.hash(req.body.password, 10)
            req.body.password = hash
        }
        await result.destroy (
            req.body
        )
        res.clearCookie('access_token')
        res.status(200).json({ message: 'Le profil a bien été destroy', data: result })
    } catch (error) {
        res.status(500).json({ message: `Une erreur est survenue`, data: error.message }) 
    }
}

const updateProfil = async (req, res) => {
    try {
        const result = await User.findByPk(req.body.id);
        console.log(req.body)
        if (req.body.password) {
            const hash = await bcrypt.hash(req.body.password, 8)
            req.body.password = hash
        }
        if (req.body.RoleId) {
            return res.status(403).json({ message: 'Droit non modifiable' })
        }
        await result.update(req.body)
        res.status(201).json({ message: 'Utilisateur modifié', data: result })
    } catch (error) {
        errorHandler(error, res)
    }
}

const updateUser = async(req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10)
        req.body.password = hash
        const result = await User.findByPk(req.params.id)
        if (!result) {
            return res.status(404).json({ message: `Cet utilisateur n'existe pas`}) 
        }
        if (req.body.RoleId) {
            if (req.body.RoleId < req.user.RoleId) return res.status(403).json({ message: 'Droits insuffisants pour mise à jour'})
        }
        await result.update (
            req.body
        )
            res.status(201).json({ message: 'L utilisateur a bien été modifié', data: result })
    } catch (error) {
        console.log(error)
        errorHandler(error, res)
    }
}

const deleteUser = async(req, res) => {
    try {
        const result = await User.findByPk(req.params.id)
        if (!result) {
            return res.status(404).json({ message: `Ce user n'existe pas`}) 
        }
        result.destroy (
            req.body
        )
        res.status(200).json({ message: 'Le user a bien été destroy', data: result })
    } catch (error) {
        res.status(500).json({ message: `Une erreur est survenue`, data: error.message }) 
    }
}

module.exports = { findAllUsers, findUserByPk, createUser, updateProfil, updateUser, deleteProfil, deleteUser, findProfile }