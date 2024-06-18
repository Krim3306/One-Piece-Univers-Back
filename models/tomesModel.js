const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define( 
        'Tome',
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false,
            },
            tome_number: {
                type: DataTypes.STRING,
                unique: false,
            },
            tome_japan_date_publish: {
                type: DataTypes.STRING,
                unique: false,
            },
            tome_french_date_publish: {
                type: DataTypes.STRING,
                unique: false,
            },
            image: {
                type: DataTypes.STRING
            }
        },
        {
            // Other model options go here
        },
    );
}