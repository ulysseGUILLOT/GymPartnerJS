// Program model

const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../database/init')

const Program = sequelize.define('Program', {
    name: {
        type: DataTypes.STRING(64)
    },
}, {
    timestamps: false,
})

module.exports = Program;