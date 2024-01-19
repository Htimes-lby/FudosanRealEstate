const Post = require('../models/postModel')
const multer = require('multer');

exports.createRealEstate = (req, res) => {
 
    
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'uploads/');
      },
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const fileExtension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
      },
    });
    
    
    const upload = multer({ storage });
    
    const uploadImages = (req, res) => {
      const filePaths = req.files.map((file) => file.path);
      // Save the filePaths or relevant information to MongoDB
      // You can use Mongoose or any other MongoDB library for this
      console.log("fdfdfd");
    
      res.json({ message: 'Images uploaded successfully', filePaths });
    };
    
    
  };