const RealEstate = require('../models/realEstateModel')

exports.getRealEstates = async (req, res) => {
    const startNumber = parseInt(req.query.startNumber)
    const endNumber = parseInt(req.query.endNumber)
    console.log('I am req.params', req.params)
    console.log("endNumber", endNumber)
    if(req.query.searchTitle !== undefined || req.query.searchContent !== undefined) {
        const searchTitle  = req.query.searchTitle;
        const searchContent = req.query.searchContent;
        if(searchTitle === 'category'){
            console.log('I am here in category search')
            try {
                const realEstates = await RealEstate.find({ category: searchContent }).sort({ createdAt: -1 }).skip(startNumber-1).limit(endNumber-startNumber+1);
                res.status(200).json(realEstates);
            } catch (error) {
                res.status(500).json({ error: 'Failed to fetch real estates' });
            }
        }
        if(searchTitle === 'province'){
            console.log('I am here in province search')
            try {
                const realEstates = await RealEstate.find({'address.province': searchContent}).sort({ createdAt: -1 }).skip(startNumber-1).limit(endNumber-startNumber+1);
                res.status(200).json(realEstates);
            } catch (error) {
                res.status(500).json({ error: 'Failed to fetch real estates' });
            }
        }
        if(searchTitle === 'city'){
            console.log('I am here in city search')
            try {
                const realEstates = await RealEstate.find({'address.city': searchContent}).sort({ createdAt: -1 }).skip(startNumber-1).limit(endNumber-startNumber+1);
                res.status(200).json(realEstates);
            } catch (error) {
                res.status(500).json({ error: 'Failed to fetch real estates' });
            }
        }
    }
    console.log('I am here in normal get mode')
    try {
        const realEstates = await RealEstate.find().sort({ createdAt: -1 }).skip(startNumber-1).limit(endNumber-startNumber+1);
        res.status(200).json(realEstates);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch real estates'});
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