const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('webdev', 'root', null, {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
