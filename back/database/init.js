const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './identifier.sqlite',
    logging: (...msg) => console.log(msg),
});

module.exports = sequelize;