const Sequelize = require('sequelize');
const Users = require('./users');
const Recipes = require('./recipes');
const sequelize = require('../db')


// Creates a default user
Users.sync({force:true})
    .then(() => {
        Recipes.sync({force:true})
            .then(() => Recipes.create({
                title: 'dummyTitle',
                ingridients: 'dummyIngridients',
                direction: 'dummyDirections',
                userID: 'dummyID'
            }))
            .then(firstMap => {
                console.log(firstMap.toJSON());
            });
        Users.create({
            email: 'dummyEmail',
            userName: 'Default User',
            userID: 'dummyUserID',
            passportStrategy: 'Facebook / Google',
            facebookID: '12345',
            gmailID: '12345',
            favorites: 'dummyFavorites',
            password: 'dummyPassword'
        }).then(firstUser => {
            console.log(firstUser.toJSON());
    })
});