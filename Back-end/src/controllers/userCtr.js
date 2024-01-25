const Post = require('../models/postModel');
const bcrypt = require("bcryptjs");
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const signUp = async (req, res) => {

        let user = await Post.find({ "privacy.email": req.body.email }, "");
        
        if (!req.body.email.includes('@')) {
            return res.json({ message: 'Invalid email format. Must contain "@".' });
        }
        else if (user.length) return res.json({ message: "Already exist!" });
        const verificationToken = crypto.randomBytes(20).toString('hex');
        const {email, passwords, firstNameGanji, lastNameGanji, firstNameGana, lastNameGana} = req.body;
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(passwords, salt);
        const post = new Post({
            privacy: [{email, password, firstNameGanji, lastNameGanji, firstNameGana, lastNameGana,verificationToken}]
        });
    sendVerificationEmail(req.body.email, verificationToken);
    await post.save((err) => {
        if (err) {
        res.status(500).json({ message: "Failed!" });
        } else {
        res.json({ message: "Success!" });
        }
    });
    
};

const sendVerificationEmail = (email, verificationToken) => {
    // Setup nodemailer to send email
    // ... (configure nodemailer transporter)

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'your_email@gmail.com', // replace with your Gmail address
            pass: 'your_app_password', // replace with your App Password
        },
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Account Verification',
        html: `<p>Click the following link to verify your account:</p>
                <a href="${process.env.BASE_URL}/verify/${verificationToken}">Verify Account</a>`,
};
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending verification email:', error);
    } else {
        console.log('Verification email sent:', info.response);
    }
    });
};

const verifyAccount = async (req, res) => {
    try {
        const user = await Post.findOne({'privacy.verificationToken': req.params.token });
    
        if (!user) {
            return res.status(400).json({ message: 'Invalid verification token' });
        }
    
        // Mark user as verified
        user.isVerified = true;
        user.verificationToken = undefined;
        await user.save();
    
        res.json({ message: 'Account verified successfully' });
        } catch (error) {
        console.error('Error verifying account:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };


module.exports = {
    signUp,
    verifyAccount,
};