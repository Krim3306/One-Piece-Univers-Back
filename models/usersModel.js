const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define( 
        'User',
        {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                    unique: {msg: "Le username est unique"},
                validate: {
                    len: {
                        args : [3,50],
                        msg: 'Le username doit comprendre entre 3 et 50 caractères'
                    }
                },
            },
            password: {
                type: DataTypes.STRING,
            },
            address: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
                // allowNull: false,
                // validate: {
                //     isEmail: {
                //         args: true,
                //         msg: "Le format de l'email n'est pas valide"
                //     },
                // },
                // unique: {msg: "Le mail doit être unique"}
            }
        },
        {
            defaultScope: {
                attributes: { exclude: ['password'] }
            },
            scopes: {
                withPassword: {
                    attributes: {}
                }
            },
            hooks: {
                afterCreate: (record) => {
                    delete record.dataValues.password;
                },
                afterUpdate: (record) => {
                    delete record.dataValues.password;
                },
            }
        }
    );
}