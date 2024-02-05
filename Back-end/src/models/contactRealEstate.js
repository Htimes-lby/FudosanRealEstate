const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactRealEstateSchema = new mongoose.Schema({
    realEstateId: {
        type: Schema.Types.ObjectId,
        ref: 'RealEstate',
    },
    poster: {
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
}
)

module.exports = mongoose.model('ContactRealEstate', contactRealEstateSchema);