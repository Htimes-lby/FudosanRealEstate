const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
 question:{
    type:String
 },
 answer:{
    type:String
 }
});

module.exports = mongoose.model("Faq", faqSchema);
