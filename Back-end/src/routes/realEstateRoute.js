const router = require("express").Router();
const postCtr = require('../controllers/postCtr')

router.post("/postRealEstate", postCtr.createRealEstate)
module.exports = router;