const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const realEstateSchema = new mongoose.Schema({
    poster: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    address: {
        zipCode: {
            type: String,
        },
        province: {
            type: String,
        },
        city: {
            type: String,
        },
        street: {
            type: String,
        },
    },
    images: [String],
    briefDescription: {
        type: String,
    },
    fullDescription: {
        type: String,
    },
    basicInfoBuilding: {
        budget: {
            type: String,
        },
        layout: {
            type: String,
        },
        landarea: {
            type: String,
        },
        buildingArea: {
            type: String,
        },
        deadline: {
            type: String,
        },
        parking: {
            type: String,
        },
    },
    basicInfoLand: {
        budget: {
            type: String,
        },
        landarea: {
            type: String,
        },
        buildingCoverageRatio: {
            type: String,
        },
        floorAreaRatio: {
            type: String,
        },
        structure: {
            type: String,
        },
    },
    category: {
        type: String,
    },
    approved: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('RealEstate', realEstateSchema);
