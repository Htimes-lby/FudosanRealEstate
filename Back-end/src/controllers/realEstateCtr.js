const RealEstate = require('../models/realEstateModel')

exports.getRealEstates = async (req, res) => {
    const firstNumber = parseInt(req.query.firstNumber)
    const lastNumber = parseInt(req.query.lastNumber)

    const legions = {
        '東北': ['青森県', '岩手県', '秋田県', '宮城県', '山形県', '福島県'],
        '関東': ['茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京県', '神奈川県'],
        '甲信越': ['新潟県', '長野県', '山梨県'],
        '北陸': ['富山県', '石川県', '福井県'],
        '東海': ['静岡県', '愛知県', '岐阜県', '三重県'],
        '近畿': ['滋賀県', '京都県', '大阪県', '兵庫県', '奈良県', '和歌山県'],
        '中国': ['岡山県', '広島県', '鳥取県', '島根県', '山口県'],
        '四国': ['香川県', '徳島県', '愛媛県', '高知県'],
        '九州': ['福岡県', '佐賀県', '長崎県', '大分県', '熊本県', '宮崎県', '鹿児島県'],
    }

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
        if(filterLabel === 'filterByLegion'){
            try {
                console.log('I am here in filterByLegion')
                console.log('provinces in the provided legion', legions[filterContent])
                const realEstates = await RealEstate.find({'address.province': { $in: legions[filterContent] }}).sort({ createdAt: -1 }).skip(firstNumber-1).limit(lastNumber-firstNumber+1);
                const totalDocumentNumber = await RealEstate.countDocuments({'address.province': {$in: legions[filterContent]}});
                return res.status(200).json({totalDocumentNumber, realEstates});
            } catch (error) {
                return res.status(500).json({error: error.message});
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
    
    if(req.query.province !== 'Not Selected') {
        try {
            const realEstates = await RealEstate.find({'address.province': req.query.province}).sort({createdAt: -1}).skip(firstNumber-1).limit(lastNumber-firstNumber+1);
            const totalDocumentNumber = await RealEstate.countDocuments({'address.province': req.query.province});
            return res.status(200).json({realEstates, totalDocumentNumber});
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    try {
        const realEstates = await RealEstate.find().sort({createdAt: -1}).skip(firstNumber-1).limit(lastNumber-firstNumber+1);
        const totalDocumentNumber = await RealEstate.countDocuments();
        return res.status(200).json({realEstates, totalDocumentNumber});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.getUnapprovedRealEstatesByAdmin = async (req, res) => {
    const firstNumber = parseInt(req.query.firstNumber);
    const lastNumber = parseInt(req.query.lastNumber);

    if(req.query.province!== 'Not Selected') {
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

        const totalDocumentNumber = await RealEstate.countDocuments({ approved: false });
        return res.status(200).json({realEstates, totalDocumentNumber});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}