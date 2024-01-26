const Post = require('../models/postModel');
const bcrypt = require("bcryptjs");
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");


const signIn = async (req, res) => {
    const user = await Post.findOne({ "privacy.email": req.query.email }, "");
    console.log(user);
    if (!user) return res.json({ message: "UserId is not exist!" });
    const isMatch = await bcrypt.compare(req.query?.password, user.privacy[0].password);
    if (!isMatch) return res.json({ message: "Password in incorrect!" });
    const payload = {
    id: user.privacy[0]._id,
    email: user.privacy[0].email,
    password: user.privacy[0].password,
    };
    jwt.sign(payload, process.env.SECRET, { expiresIn: "3650d" }, (err, token) => {
    if (err) {
        throw err;
    }
    res.json({
        message: "Jwt Login Success.",
        token: `JWT ${token}`,
        user: user.privacy[0],
    });
    });
}


const signUp = async (req, res) => {

        let user = await Post.find({ "privacy.email": req.body.email }, "");
        
        if (!req.body.email.includes('@')) {
            return res.json({ message: 'Invalid email format. Must contain "@".' });
        }
        else if (user.length) return res.json({ message: "Already exist!" });
        const {email, passwords, firstNameGanji, lastNameGanji, firstNameGana, lastNameGana} = req.body;
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(passwords, salt);
        
        const randomBytes = crypto.randomBytes(Math.ceil(3));

        // Convert random bytes to hexadecimal string
        const randomNumber = randomBytes.toString('hex');

        // Return the substring of the generated random number with the specified length
        const verificationCode = randomNumber.slice(0, 6);
        
        const post = new Post({
            privacy: [{email, password, firstNameGanji, lastNameGanji, firstNameGana, lastNameGana, verificationCode}]
        });
    sendVerificationEmail(req.body.email, verificationCode);
    await post.save((err) => {
        if (err) {
        res.status(500).json({ message: "Failed!" });
        } else {
        res.json({ message: "Success!" });
        }
    });
    
};

const inputEmailCode = async (req, res) => {
    
    let code = await Post.find({ "privacy.verificationCode": req.body.emailVarificationCode }, "");
    console.log(code)
    if(!code.length) return res.json({ message: "invalid verification code"});
    else {
        return res.json({ message:'valid verification code'});
    }
}

const sendVerificationEmail = (email, verificationCode) => {
    // Setup nodemailer to send email
    // ... (configure nodemailer transporter)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:'domashiadakeo@gmail.com', // replace with your Gmail address
            pass: 'oxay jviy gssj twsq', // replace with your App Password
        },
    });

    const mailOptions = {
        from: 'domashiadakeo@gmail.com',
        to: "jamesryo310@gmail.com",
        subject: 'Account Verification',
        html: `<!DOCTYPE html>
        <html>
          <head>
            <style>
              p {
                color: black;
              }
              .code {
                display: inline-block;
                background-color: lightgray;
                border-radius: 7px;
                padding: 6px;
              }
              .code strong {
                display: block;
              }
            </style>
          </head>
          <body>
            <p>Your verification code is:</p>
            <div class="code">
              <strong>${verificationCode}</strong>
            </div>
          </body>
        </html>`,
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
    console.log(req.params.token);
    try {
        const user = await Post.findOne({'privacy.verificationToken': req.params.token });
    
        if (!user) {
            return res.status(400).json({ message: 'Invalid verification token' });
        }
    
        // Mark user as verified
        user.privacy[0].isVerified = true;
        user.privacy[0].verificationToken = undefined;
        await user.save();
    
        res.json({ message: 'Account verified successfully' });
        } catch (error) {
        console.error('Error verifying account:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    };


module.exports = {
    signUp,
    signIn,
    verifyAccount,
    inputEmailCode,
};