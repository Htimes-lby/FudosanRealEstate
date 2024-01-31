const User = require('../models/userModel');
const bcrypt = require("bcryptjs");
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");


const signIn = async (req, res) => {
    
    const user = await User.findOne({ email: req.query.email }, "");

    
    if (!user) return res.status(500).json({ message: "This email is not exist!" });
    if(user.emailVerified === false) return res.status(500).json({ message: "Your email is not verified" });
    const isMatch = await bcrypt.compare(req.query?.password, user.password);
    if (!isMatch) res.json(500).json({ message: "Password is incorrect!" });

    const payload = {
    id: user._id,
    email: user.email,
    password: user.password,
    };
    jwt.sign(payload, process.env.SECRET, { expiresIn: "3650d" }, (err, token) => {
    if (err) {
        throw err;
    }
    res.status(200).json({
        message: "Jwt Login Success.",
        token: `JWT ${token}`,
        user: user,
    });
    });
}


const signUp = async (req, res) => {
        let user = await User.find({ email: req.body.email }, "");
        if (!req.body.email.includes('@')) {
            return res.status(500).json({ message: 'Invalid email format. Must contain "@".' });
        }
        else if (user[0]) return res.status(500).json({ message: "Already exist!" });

        const {email, passwords, firstNameGanji, lastNameGanji, firstNameGana, lastNameGana} = req.body;

        const name  = {firstNameGanji, lastNameGanji, firstNameGana, lastNameGana}
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(passwords, salt);
        
        const randomBytes = crypto.randomBytes(Math.ceil(3));

        // Convert random bytes to hexadecimal string
        const randomNumber = randomBytes.toString('hex');

        // Return the substring of the generated random number with the specified length
        const verificationCode = randomNumber.slice(0, 6);
        
        const post = new User({email: email, password: hashedPassword, name: name, verificationCode: verificationCode});
    // sendVerificationEmail(req.body.email, verificationCode);
    await post.save((err) => {
        if (err) {
        res.status(500).json({ message: "Failed!" });
        } else {
        res.json({ message: "Success!" });
        }
    });
};

const getUser = async (req, res) => {
    let user = await User.find({ _id: req.query._id }, "");
    res.json(user);

}

const inputEmailCode = async (req, res) => {
    try {
        let code = await User.findOne({ verificationCode: req.body.emailVarificationCode }, "");
        
        if (!code) {
            return res.json({ message: "Invalid verification code" });
        } else {
            res.json({ message: 'Valid verification code' });
            code.verificationCode = '';
            code.emailVerified = true;
            await code.save();  
        }
    } catch (error) {
        console.error('Error inputting email code:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

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


module.exports = {
    signUp,
    signIn,
    inputEmailCode,
    getUser
};