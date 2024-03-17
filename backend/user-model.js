/* const mongoose = require('mongoose'); */
import {mongoose} from 'mongoose';
//const uniqueValidator = require('mongoose-unique-validator');
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    surname: {type: String},
    email: {type: String, required: true},
    phone: {type: String},
    address: {type: String},
    cart: {type: Array},
})

userSchema.plugin(uniqueValidator);

export const UserModel = mongoose.model('UserModel', userSchema);