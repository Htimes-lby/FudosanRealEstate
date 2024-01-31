const router = require("express").Router();

const postCtr = require('../controllers/postCtr')
const userCtr = require('../controllers/userCtr');
const realEstateCtr = require('../controllers/realEstateCtr')
const messageCtr = require('../controllers/messageCtr')
const favouriteCtr = require('../controllers/favouriteCtr')

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
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png','application/pdf', 'application/msword', 'text/plain'];
    if (allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  const upload = multer({ storage, fileFilter });

router.post("/postRealEstate", upload.array('images', 10),  postCtr.createRealEstate)
router.post("/postAgent", upload.array('images', 10),  postCtr.createAgent)
router.post("/signup", userCtr.signUp)
router.post('/inputCode', userCtr.inputEmailCode)
router.get("/signin", userCtr.signIn)
router.get("/getRealEstates", realEstateCtr.getRealEstates)
router.get("/getRealEstateById", realEstateCtr.getRealEstateById)
router.get("/getRealEstatesByPosterId", realEstateCtr.getRealEstatesByPosterId)
router.get("/getUser", userCtr.getUser)
router.post("/setMessage", messageCtr.setMessage)
router.get("/getMessages", messageCtr.getMessages)
router.post("/addFavourite", favouriteCtr.addFavourite)
router.post("/removeFavourite", favouriteCtr.removeFavourite)

module.exports = router;