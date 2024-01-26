//Sold-Experience Use-Experience Seller-Letter Favourite My-Post 
const Feedback = require('../models/feedbackModel');

exports.getFeedbacks = async (req, res) => {
    const category = req.body.category;
    const startNumber = req.body.startNumber;
    const endNumber = req.body.endNumber;
    try {
        const feedbacks = await Feedback.find({category: category}).sort({createAt: -1}).skip(startNumber -1).limit(endNumber-startNumber+1);
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch feedbacks'});
    }
}

exports.getFeedbackById = async (req, res) => {
    const categoryId = req.body.categoryId;
    try {
        const feedback = await Feedback.findOne({_id: categoryId});
        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch feedback'})
    }
}
