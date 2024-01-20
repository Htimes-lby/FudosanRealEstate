const Post = require('../models/postModel')

const createRealEstate = async (req, res) => {
  try {
    const {
      privacyDataArray,
      contentDataArray,
      overviewHouseDataArray,
    } = req.body; // Use req.body to access request body data

    // Check if the arrays are defined
    const privacyData = privacyDataArray ? privacyDataArray.reduce((acc, data) => ({ ...acc, ...data }), {}) : {};
    const descriptionData = contentDataArray ? contentDataArray.reduce((acc, data) => ({ ...acc, ...data }), {}) : {};
    const basicInfoData = overviewHouseDataArray ? overviewHouseDataArray.reduce((acc, data) => ({ ...acc, ...data }), {}) : {};

    const post = new Post({
      privacy: [privacyData],
      description: [descriptionData],
      basicInfo: [basicInfoData],
      // Add other fields as needed
    });

    // Save the post to the database
    await post.save();

    console.log('Post created successfully:', post);
    return res.status(200).json({ message: 'Post created successfully', post });
  } catch (error) {
    console.error('Error creating post:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createRealEstate,
};