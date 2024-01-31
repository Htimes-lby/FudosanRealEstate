const User = require('../models/userModel')

exports.addFavourite = async (req, res) => {
    const userId = req.query.userId;
    const realEstateIdToAdd = req.query.realEstateId;
    try {
        const updatedUser = User.findOneAndUpdate(
            { _id: userId },
            { $push: { favourites: realEstateIdToAdd }},
            { new: true }
        )

        if(!updatedUser) {
            return res.status(404).json({ error: 'Document Not Found' })
        }

        return res.status(200).json({ updatedUser });
    } catch (error) {
        return res.status(500).json({ error: 'An error occured' });
    }
}

exports.removeFavourite = async (req, res) => {
    const userId = req.query.userId;
    const realEstateIdToRemove = req.query.realEstateId;
    try {
        const updatedUser = User.findOneAndUpdate(
            { _id: userId },
            { $pull: { favourites: realEstateIdToRemove }},
            { new: true }
        )

        if(!updatedUser) {
            return res.status(404).json({ error: 'Document Not Found' });
        }

        return res.status(200).json({ updatedUser });
    } catch (error) {
        return res.status(500).json({ error: 'An error occured' });
    }
}