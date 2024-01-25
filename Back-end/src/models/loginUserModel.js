const mongoose = require('mongoose');

const loginUserSchema = new mongoose.Schema({
    name: {
        firstNameGanji:{
            type:String,
        },
        lastNameGanji:{
            type:String,
        },
        firstNameGana:{
            type:String,
        },
        lastNameGana:{
            type:String,
        },
    },
    email: {
        type:String,
    },
    password: {
        type:String,
    },
    emailVerified: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('LoginUser', loginUserSchema);
