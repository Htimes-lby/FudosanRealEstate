const Message = require('../models/messageModel');

exports.setMessage = async (req, res) => {
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
    if(req.query.opponentId !== undefined) {
        const opponentId = req.query.opponentId;
        try {
            const messages = await Message.find({
                $or: [
                    { senderId: myId, receiverId: opponentId },
                    { senderId: opponentId, receiverId: myId }
                ]
            }).sort({ createdAt: -1 });
            return res.status(200).json({messages});
        } catch (error) {
            return res.status(500).json({error: 'error occured'});
        }
    } else {
        const firstNumber = req.query.firstNumber;
        const lastNumber = req.query.lastNumber;
        const activeCategory = req.query.activeCategory;
        
        if(activeCategory === 'all') {
            try {
                const messages = await Message.find({
                    $or: [
                        { senderId: myId },
                        { receiverId: myId }
                    ]
                }).sort({ createdAt: -1 }).skip(firstNumber-1).limit(lastNumber-firstNumber+1);
                const totalDocumentNumber = await Message.countDocuments({
                    $or: [
                        { senderId: myId },
                        { receiverId: myId }
                    ]
                })
                return res.status(200).json({messages, totalDocumentNumber});
            } catch (error) {
                return res.status(500).json({error: 'error occured'});
            }
        }
        if(activeCategory === 'received-all') {
            try {
                const messages = await Message.find({
                    receiverId: myId
                }).sort({ createdAt: -1 }).skip(firstNumber-1).limit(lastNumber-firstNumber+1);
                const totalDocumentNumber = await Message.countDocuments({
                    receiverId: myId,
                })
                return res.status(200).json({messages, totalDocumentNumber});
            } catch (error) {
                return res.status(500).json({error: 'error occured'});
            }
        }
        if(activeCategory === 'received-unread') {
            try {
                const messages = await Message.find({
                    receiverId: myId,
                    status: 'unread',
                }).sort({ createdAt: -1 }).skip(firstNumber-1).limit(lastNumber-firstNumber+1);
                const totalDocumentNumber = await Message.countDocuments({
                    receiverId: myId,
                    status: 'unread',
                })
                return res.status(200).json({messages, totalDocumentNumber});
            } catch (error) {
                return res.status(500).json({error: 'error occured'});
            }
        }
        if(activeCategory === 'sent') {
            try {
                const messages = await Message.find({
                    senderId: myId
                }).sort({ createdAt: -1 }).skip(firstNumber-1).limit(lastNumber-firstNumber+1);
                const totalDocumentNumber = await Message.countDocuments({
                    senderId: myId,
                })
                return res.status(200).json({messages, totalDocumentNumber});
            } catch (error) {
                return res.status(500).json({error: 'error occured'});
            }
        }
    }
    
}