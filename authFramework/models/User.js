const mongoose = require('mongoose');
const { Schema } = mongoose; //same as const Schema = mongoose.Schema;
//we are going to use this Schema object to create a collection
//Schema object describes all the properties we have
const userSchema = new Schema({
    googleId : String
})

mongoose.model('users', userSchema);
