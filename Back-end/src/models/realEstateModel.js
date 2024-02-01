const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const realEstateSchema = new mongoose.Schema({
    poster: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    address: {
        zipCode: {
            type: Number,
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
            type: Number,
        },
        layout: {
            type: String,
        },
        landarea: {
            type: Number,
        },
        buildingArea: {
            type: Number,
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
            type: Number,
        },
        landarea: {
            type: Number,
        },
        buildingCoverageRatio: {
            type: Number,
        },
        floorAreaRatio: {
            type: Number,
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
    label: {
        type: String,
    }
})

module.exports = mongoose.model('RealEstate', realEstateSchema);
