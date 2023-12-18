const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './identifier.sqlite',
});

module.exports = sequelize;