const mongoose = require('mongoose');

const contactRealEstateSchema = new mongoose.Schema({
    category: {
        type: String,
    },
    content: {
        type: String,
    },
    status: {
        type: String,
        default: 'unread',
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('ContactRealEstate', contactRealEstateSchema);