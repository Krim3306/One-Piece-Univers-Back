const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define( 
        'Topic',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                    unique: true,
                    msg: 'Le nom du topic doit être unique',
                validate: {
                    len: {
                        args : [2,50],
                        msg: 'Le nom du topic doit comprendre entre 2 et 50 caractères'
                    }
                },
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: false,
                validate: {
                    len: {
                        args : [2,500],
                        msg: 'La description du topic doit comprendre entre 2 et 50 caractères'
                    }
                },
            },
        },
        {
            // Other model options go here
        },
    );
}