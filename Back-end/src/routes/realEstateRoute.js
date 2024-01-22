const router = require("express").Router();
const postCtr = require('../controllers/postCtr')
const uploadController = require('../controllers/uploadCtr');
const userCtr = require('../controllers/userCtr');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const fileExtension = file.originalname.split('.').pop();
      cb(null, 'image-' + uniqueSuffix + '.' + fileExtension);
    },
  });
  
  const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({ storage, fileFilter });
  

router.post("/postRealEstate", upload.array('images', 10),  postCtr.createRealEstate)
router.post("/signup", userCtr.signUp)
router.post('/api/upload', upload.array('images', 5), uploadController.uploadImages);

module.exports = router;