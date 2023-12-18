// modèle Exercice

const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Exercice = sequelize.define('Exercice', {
    name: {
        type: DataTypes.STRING(64)
    },
    sets: {
        type: DataTypes.INTEGER
    },
    reps: {
        type: DataTypes.INTEGER
    },
    weight: {
        type: DataTypes.INTEGER
    }
},{
    timestamps: false,
});

module.exports = Exercice;