const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const config = require('../config/config');//importing stuff from config
//GoogleStrategy takes 2 arguments: auth options, callback function
const mongoose = require('mongoose');
const User = mongoose.model('users');//one argument means we are trying to fetch something out of mongoose; two arguments mean we aret trying to load something into it.

passport.serializeUser((user, done) => {//where user - is user model(whatever we just pulled our of database)
    //serializeUser stuffs user into cookie
    console.log('user in serializeUser: ', user)
    done(null, user.id); //done is a callback after we have done some work, user.id - unique id assigned by Mongo
})

passport.deserializeUser((id, done) => {//searching for id
    //accessing database is asynchronous action - we assume that we get promisde back
    User.findById(id).then((user) => {
        done(null, user);
    })
});

const options = {
    clientID : config.googleClientID,
    clientSecret : config.googleClientSecret,
    callbackURL : '/auth/google/callback'
};

passport.use(new GoogleStrategy(options, 
    //done is function for passport to continue authentication
    (accessToken, refreshToken, profile, done) => {
        User.findOne({googleId: profile.id})
        .then((existingUser) => {
            if (existingUser){
                console.log('we already have a record');
                done(null, existingUser); //null means all is done
            }else{
                console.log('we need to create a user');
                new User({googleId: profile.id})//model instance - which represents new record in our collection
                .save()
                .then(user => done(null, user));
            }
        })
        // console.log('access token', accessToken);
        // console.log('refresh token', refreshToken);
        // console.log('profile', profile);
    })
);

