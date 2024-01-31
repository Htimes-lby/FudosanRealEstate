const RealEstate = require('../models/realEstateModel')

exports.getRealEstates = async (req, res) => {
    const firstNumber = parseInt(req.query.firstNumber)
    const lastNumber = parseInt(req.query.lastNumber)
    if(req.query.filterLabel !== undefined || req.query.filterContent !== undefined) {
        const filterLabel  = req.query.filterLabel;
        const filterContent = req.query.filterContent;
        if(filterLabel === 'filterByCategory'){
            try {
                const realEstates = await RealEstate.find({ category: filterContent, approved: true }).sort({ createdAt: -1 }).skip(firstNumber-1).limit(lastNumber-firstNumber+1);
                const totalDocumentNumber = await RealEstate.countDocuments({'category': filterContent, approved: true})
                return res.status(200).json({totalDocumentNumber, realEstates});
            } catch (error) {
                return res.status(500).json({ error: 'Failed to fetch real estates' });
            }
        }
        if(filterLabel === 'filterByProvince'){
            try {
                const realEstates = await RealEstate.find({'address.province': filterContent, approved: true}).sort({ createdAt: -1 }).skip(firstNumber-1).limit(lastNumber-firstNumber+1);
                const totalDocumentNumber = await RealEstate.countDocuments({'address.province': filterContent, approved: true})
                return res.status(200).json({totalDocumentNumber, realEstates});
            } catch (error) {
                return res.status(500).json({ error: 'Failed to fetch real estates' });
            }
        }
        if(filterLabel === 'filterByCity'){
            try {
                const realEstates = await RealEstate.find({'address.city': filterContent, approved: true}).sort({ createdAt: -1 }).skip(firstNumber-1).limit(lastNumber-firstNumber+1);
                const totalDocumentNumber = await RealEstate.countDocuments({'address.city': filterContent, approved: true});
                return res.status(200).json({totalDocumentNumber, realEstates});
            } catch (error) {
                return res.status(500).json({ error: 'Failed to fetch real estates' });
            }
        }
    }
    try {
        const realEstates = await RealEstate.find({approved: true}).sort({ createdAt: -1 }).skip(firstNumber-1).limit(lastNumber-firstNumber+1);
        return res.status(200).json(realEstates);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch real estates'});
    }
}

exports.getRealEstateById = async (req, res) => {
    try {
        const realEstate = await RealEstate.findOne({ _id: req.query.realEstateId });
        if(!realEstate) {
            return res.status(404).json({ msg: `No RealEstate with id: ${req.query.realEstateId}`});
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

exports.getRealEstatesByPosterId = async (req, res) => {
    const posterId = req.query.posterId;
    try {
        const realEstates = await RealEstate.find({poster: posterId});
        res.status(200).json({realEstates});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getRealEstatesByAdmin = async (req, res) => {
    const firstNumber = parseInt(req.query.firstNumber);
    const lastNumber = parseInt(req.query.lastNumber);
    console.log('query-------------------', req.query);
    if(req.query.province !== 'Not Selected') {
        try {
            const realEstates = await RealEstate.find({'address.province': req.query.province}).sort({createdAt: -1}).skip(firstNumber-1).limit(lastNumber-firstNumber+1);
            const totalDocumentNumber = await RealEstate.countDocuments({'address.province': req.query.province});
            console.log('I am here in province search', totalDocumentNumber)
            return res.status(200).json({realEstates, totalDocumentNumber});
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    try {
        const realEstates = await RealEstate.find().sort({createdAt: -1}).skip(firstNumber-1).limit(lastNumber-firstNumber+1);
        const totalDocumentNumber = await RealEstate.countDocuments();
        console.log('I am here in getRealEstateByAdmin', totalDocumentNumber)
        return res.status(200).json({realEstates, totalDocumentNumber});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.getUnapprovedRealEstatesByAdmin = async (req, res) => {
    const firstNumber = parseInt(req.query.firstNumber);
    const lastNumber = parseInt(req.query.lastNumber);
    if(req.query.province !== 'Not Selected') {
        try {
            const realEstates = await RealEstate.find({
                'address.province': req.query.province,
                approved: false,
            }).sort({createdAt: -1}).skip(firstNumber-1).limit(lastNumber-firstNumber+1);
            const totalDocumentNumber = await RealEstate.countDocuments({'address.province': req.query.province, approved: false});
            return res.status(200).json({realEstates, totalDocumentNumber});
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    try {
        const realEstates = await RealEstate.find({approved: false}).sort({createdAt: -1}).skip(firstNumber -1).limit(lastNumber-firstNumber+1);
        const totalDocumentNumber = await RealEstate.countDocuments({ approved: fasle });
        return res.status(200).json({realEstates, totalDocumentNumber});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}