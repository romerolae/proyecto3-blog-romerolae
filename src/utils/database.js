//! We create an utility to handle the connection to the DataBase


//? Import the Sequelize module
const { Sequelize } = require('sequelize')

//? Import the configuration object from the config module
const config = require('../../config')

//? Create a new instance of Sequelize and connect to the development
const db = new Sequelize(config.db.development)

//? Export the db instance to be used in other modules
module.exports = db