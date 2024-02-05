const RealEstate = require('../models/realEstateModel')
const Agent = require('../models/agentsModel')
const ContactGeneral = require('../models/contactGeneral')
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

exports.saveGeneralContactMessage = async (req, res) => {
    const newContactMessage = new ContactGeneral({clientId: req.body.clientId, category: req.body.category, content: req.body.content});
    await newContactMessage.save((error) => {
        if(error) {
            return res.status(404).json({message: 'failed'});
        } else {
            return res.status(200).json({message: 'success'});
        }
    })
}

exports.fetchGeneralContactMessages = async (req, res) => {
    const clientId = req.query.clientId;
    try {
        const contactMessages = await ContactGeneral.find({clientId: clientId}).sort({createdAt: -1});
        console.log('I am here', contactMessages)
        return res.status(200).json({contactMessages});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}