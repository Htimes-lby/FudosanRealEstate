const User = require('../models/userModel');
const bcrypt = require("bcryptjs");
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
const mail = "";

const signIn = async (req, res) => {
    
    const user = await User.findOne({ email: req.query.email }, "");

    
    if (!user) return res.status(500).json({ message: "このメールは存在しません!" });
    if(user.emailVerified === false) return res.status(500).json({ message: "メールアドレスが認証されていません!" });
    const isMatch = await bcrypt.compare(req.query?.password, user.password);
    if (!isMatch) res.json(500).json({ message: "パスワードが正しくありません！" });

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
        mail = req.body.email;
        if (!req.body.email.includes('@')) {
            return res.status(500).json({ message: '電子メールの形式が無効です。 含まれている必要があります "@"。' });
        }
        else if (user[0]) return res.status(500).json({ message: "すでに存在します!" });

        const {email, password, firstNameGanji, lastNameGanji, firstNameGana, lastNameGana} = req.body;

        const name  = {firstNameGanji, lastNameGanji, firstNameGana, lastNameGana}
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const randomBytes = crypto.randomBytes(Math.ceil(3));

        // Convert random bytes to hexadecimal string
        const randomNumber = randomBytes.toString('hex');

        // Return the substring of the generated random number with the specified length
        const verificationCode = randomNumber.slice(0, 6);
        const newUser = new User({email: email, password: hashedPassword, name: name, verificationCode: verificationCode});
    // sendVerificationEmail(req.body.email, verificationCode);
    await newUser.save((err) => {
        if (err) {
        res.status(500).json({ message: "失敗しました！" });
        } else {
        res.json({ message: "成功しました！" });
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
            return res.json({ message: "無効な検証コード" });
        } else {
            res.json({ message: '有効な確認コード' });
            code.verificationCode = '';
            code.emailVerified = true;
            await code.save();  
        }
    } catch (error) {
        console.error('Error inputting email code:', error);
        res.status(500).json({ error: '内部サーバーエラー' });
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
        to: mail,
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