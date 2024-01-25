const mongoose = require('mongoose');

const contactGeneralSchema = new mongoose.Schema({
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

module.exports = mongoose.model('ContactGeneral', contactGeneralSchema);