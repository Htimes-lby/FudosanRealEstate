const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactGeneralSchema = new mongoose.Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
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