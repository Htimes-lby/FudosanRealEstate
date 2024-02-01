const RealEstate = require('../models/realEstateModel')
const Agent = require('../models/agentsModel')
exports.approveRealEstate = async (req, res) => {
    try {
        const category = req.body.category;
        const realEstateId = req.body.realEstateId;
        const updatedRealEstate = await RealEstate.findOneAndUpdate(
            { _id: realEstateId },
            { $set: {category: category, approved: true} },
            { new: true},
        )

        if(!updatedRealEstate) {
            return res.status(404).json({error: 'realEstate not found'});
        }

        return res.status(200).json({updatedRealEstate});
    } catch(error) {
        return res.status(500).json({error: error.message})
    }
}

exports.disapproveRealEstate = async (req, res) => {
    try {
        const realEstateId = req.body.realEstateId;
        const updatedRealEstate = await RealEstate.findOneAndUpdate(
            { _id: realEstateId },
            { $set: {approved: false} },
            { new: true }
        )

        if(!updatedRealEstate) {
            return res.status(404).json({error: 'realEstate not found'});
        }

        return res.status(200).json({updatedRealEstate});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

exports.approveAgent = async (req, res) => {
    try {
        const agentId = req.body.agentId;
        const updatedAgent = await Agent.findOneAndUpdate(
            { _id: agentId },
            { $set: {approved: true }},
            { new: true }
        )
        return res.status(200).json({updatedAgent})
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.disapproveAgent = async (req, res) => {
    try {
        const agentId = req.body.agentId;
        const updatedAgent = await Agent.findOneAndUpdate(
            { _id: agentId },
            { $set: {approved: false }},
            { new: true }
        )
        return res.status(200).json({updatedAgent})
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}