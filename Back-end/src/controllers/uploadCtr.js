const Image = require('../models/imageModel');

const uploadImages = async (req, res) => {
  try {
    
    const filepaths = req.files.map((file) => file.path);

    // Save filepaths or relevant information to MongoDB using the Image model
    const images = await Image.create(filepaths.map((filepath) => ({ filepath })));

    res.json({ message: 'Images uploaded successfully', images });
  } catch (error) {
    console.error('Error uploading images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  uploadImages,
};