const {Sequelize} = require("sequelize");
const connection = new Sequelize("sue", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = connection;