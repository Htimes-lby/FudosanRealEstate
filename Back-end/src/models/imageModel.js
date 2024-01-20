const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filepath: String,
  // Add more fields as needed
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;