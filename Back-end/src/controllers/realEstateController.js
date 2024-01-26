const RealEstate = require('../models/realEstateModel')

exports.getRealEstates = async (req, res) => {
    const searchTitle  = req.body.searchTitle;
    const searchContent = req.body.searchContent
    const startNumber = req.body.startNumber;
    const endNumber = req.body.endNumber;
    if(searchTitle === 'category'){
        try {
            const realEstates = await RealEstate.find({ category: searchContent }).sort({ createdAt: -1 }).skip(startNumber-1).limit(endNumber-startNumber+1);
            res.status(200).json(realEstates);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch real estates' });
        }
    }
    if(searchTitle === 'province'){
        try {
            const realEstates = await RealEstate.find({'address.province': searchContent}).sort({ createdAt: -1 }).skip(startNumber-1).limit(endNumber-startNumber+1);
            res.status(200).json(realEstates);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch real estates' });
        }
    }
    if(searchTitle === 'city'){
        try {
            const realEstates = await RealEstate.find({'address.city': searchContent}).sort({ createdAt: -1 }).skip(startNumber-1).limit(endNumber-startNumber+1);
            res.status(200).json(realEstates);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch real estates' });
        }
    }
}

exports.getRealEstateById = async (req, res) => {
    try {
        const realEstate = await RealEstate.findOne({ _id: req.body.realEstateId });
        if(!realEstate) {
            return res.status(404).json({ msg: `No RealEstate with id: ${req.body.realEstateId}`});
        } else {
            res.status(200).json({realEstate});
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getRealEstatesByIds = async (req, res) => {
    const ids = req.body.realEstateIds;
    try {
        const realEstates = await RealEstate.find({ _id: { $in: ids } });
        res.status(200).json({realEstates});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}