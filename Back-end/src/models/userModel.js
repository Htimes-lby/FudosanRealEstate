const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    name: {
        firstNameGanji: {
            type: String,
        },
        lastNameGanji: {
            type: String,
        },
        firstNameGana: {
            type: String,
        },
        lastNameGana: {
            type: String,
        }
    },
    age: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type:String,
    },
    verificationCode: {
        type: String,
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    phoneNumber: {
        type: String,
    },
    favourites: [{
        type: Schema.Types.ObjectId,
        ref: 'RealEstate',
    }],
    myPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'RealEstate',
    }],
})

module.exports = mongoose.model('User', userSchema);