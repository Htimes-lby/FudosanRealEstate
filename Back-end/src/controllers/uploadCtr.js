const Post = require('../models/postModel');
const uploadImages = async (req, res) => {

  console.log('1324324344324424432',req);
  try {
    
    const filepaths = req.files.map((file) => file.path);

    const post = new Post({
      imagePaths:filepaths
      });
    await post.save();

    // Save filepaths or relevant information to MongoDB using the Image model



    // Associate images with a post and save
    res.json({ message: 'Images uploaded successfully'});
  } catch (error) {
    console.error('Error uploading images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  uploadImages,
};