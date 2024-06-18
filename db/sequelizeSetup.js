const { Sequelize } = require('sequelize');

const bcrypt = require('bcrypt')

const UserModel = require('../models/usersModel')
const mockUsers = require('../users')

const TopicModel = require('../models/topicsModel')
const mockTopics = require('../topics')

const TomeModel = require('../models/tomesModel')
const mockTomes = require('../tomes')

const RoleModel = require('../models/roleModel')
const ReviewModel = require('../models/reviewsModel')

const sequelize = new Sequelize('one_piece_api', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
    charset: 'utf8',
    collate: 'utf8_general_ci', 
});

const Topic = TopicModel(sequelize)
const User = UserModel(sequelize)
const Role = RoleModel(sequelize)
const Review = ReviewModel(sequelize)
const Tome = TomeModel(sequelize)

Role.hasMany(User, {
    foreignKey: {
        defaultValue: 2,
    }
});
User.belongsTo(Role);

User.hasMany(Topic);
Topic.belongsTo(User);

Topic.hasMany(Review, {
    // foreignKey: {
    //     allowNull: false,
    // }
});
Review.belongsTo(Topic);

User.hasMany(Review, {
    foreignKey: {
        allowNull: false,
    }
});
Review.belongsTo(User);

// Commentaire de commentaire
// Review.belongsTo(Review, {
//     foreignKey: {
//         allowNull: true,
//     }
// })
// Dans POSTMAN : en FK : TopicId + ReviewId

User.hasMany(Tome);
Tome.belongsTo(User);

sequelize.sync({ force: true })
.then(() => {

    Role.create({ id: 1, label: "admin"})
    Role.create({ id: 2, label: "user"})

    mockUsers.forEach( async user => {
        const hash = await bcrypt.hash(user.password, 10)
        user.password = hash
        await User.create(user)
    })
    mockTopics.forEach(topic => {
        Topic.create(topic)
    })
    mockTomes.forEach(tome => {
        Tome.create(tome)
    })
})
.catch(error => {
    console.log(error)
})

sequelize.authenticate()
    .then(() => console.log('La connexion à la base de données a bien été établie.'))
    .catch(error => console.error(`Impossible de se connecter à la base de données ${error}`))

module.exports = { sequelize, Topic, User, Role, Review, Tome }