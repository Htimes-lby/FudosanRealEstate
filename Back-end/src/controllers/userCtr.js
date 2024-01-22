const Post = require('../models/postModel');
const signUp = async (req, res) => {
console.log('1324324344324424432',req.body);
    try {
        const post = new Post({
            privacy: [req.body]
          });
      await post.save();

    // Associate images with a post and save
    res.json({ message: 'Images uploaded successfully'});
    } catch (error) {
    console.error('Error uploading images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
    signUp,
};