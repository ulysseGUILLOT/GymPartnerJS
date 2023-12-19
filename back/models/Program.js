// Program model

const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../database/init')
const Exercice = require('./Exercice')

const Program = sequelize.define('Program', {
    name: {
        type: DataTypes.STRING(64)
    },
}, {
    timestamps: false,
})

Program.belongsToMany(Exercice, {
    through: 'Exercice_Program',
    timestamps: false
})

module.exports = Program;