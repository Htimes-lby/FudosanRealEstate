const mongoose = require('mongoose');

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
        type: Number,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    favourites: [{
        type: Schema.Types.objectId,
        ref: 'RealEstate',
    }],
    myPosts: [{
        type: Scehma.Types.objectId,
        ref: 'RealEstate',
    }],
})

module.exports = mongoose.model('User', userSchema);
