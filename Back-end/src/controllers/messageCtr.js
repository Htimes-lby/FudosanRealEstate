const Message = require('../models/messageModel');

exports.setMessage = async (req, res) => {
    console.log(req.body)
    const newMessage = new Message({senderId: req.body.senderId, receiverId: req.body.receiverId, content: req.body.content});
    await newMessage.save((error) => {
        if(error) {
            return res.status(500).json({message: 'Failed !!!'});
        } else {
            return res.status(200).json({message: 'Success !!!'});
        }
    })
};

exports.getMessages = async (req, res) => {
    const myId = req.query.myId;
    console.log('-------------------------', req.query)
    if(req.query.opponentId !== undefined) {
        const opponentId = req.query.opponentId;
        console.log('I am here ----------------')
        try {
            const messages = await Message.find({
                $or: [
                    { senderId: myId, receiverId: opponentId },
                    { senderId: opponentId, receiverId: myId }
                ]
            }).sort({ createdAt: -1 });
            console.log('I am here ---------------- success', messages)
            return res.status(200).json({messages});
        } catch (error) {
            return res.status(500).json({error: 'error occured'});
        }
    }
    try {
        const messages = await Message.find({
            $or: [
                { senderId: myId },
                { receiverId: myId }
            ]
        }).sort({ createdAt: -1 });
        return res.status(200).json({messages});
    } catch (error) {
        return res.status(500).json({error: 'error occured'});
    }
}