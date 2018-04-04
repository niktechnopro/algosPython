const Sequelize = require('sequelize');
const connection = require('../db');

//this is where we actually creating table if it was not created yet
//in sequelize language creating a model means creating a table
const Recipes = connection.define('receipies', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // to ensure every email is unique
    },
    ingridients: {
        type: Sequelize.STRING,
        allowNull: false
        // validate:{
        //     notEmpty: true, //not allowing empty string
        // }
    },
    direction: {
        type: Sequelize.STRING,
        allowNull: false
        // validate:{
        //     notEmpty: true, //not allowing empty string
        // }
    },
})


module.exports = Recipes;