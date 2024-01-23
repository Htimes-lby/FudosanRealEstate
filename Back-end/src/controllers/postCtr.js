const Post = require('../models/postModel')

const createRealEstate = async (req, res) => {

  try {
    const {
      privacyDataArray,
      contentDataArray,
      overviewHouseDataArray,
      images
    } = req.body; // Use req.body to access request body data
 
    // Check if the arrays are defined
    const newPrivacyDataArray = JSON.parse(privacyDataArray);
    const newContentDataArray = JSON.parse(contentDataArray);
    const newOverviewHouseDataArray = JSON.parse(overviewHouseDataArray);

    const privacyData = newPrivacyDataArray ? newPrivacyDataArray.reduce((acc, data) => ({ ...acc, ...data }), {}) : {};
    const descriptionData = newContentDataArray ? newContentDataArray.reduce((acc, data) => ({ ...acc, ...data }), {}) : {};
    const basicInfoData = newOverviewHouseDataArray ? newOverviewHouseDataArray.reduce((acc, data) => ({ ...acc, ...data }), {}) : {};
    // const filepaths = req.uploadDataArray.files.map((file) => file.path);
    const filepaths = req.files.map((file) => ({ originalname: file.originalname, buffer: file.buffer }));
    console.log(newPrivacyDataArray);
    const post = new Post({
      privacy: [privacyData],
      description: [descriptionData],
      basicInfo: [basicInfoData],
      imagePaths:filepaths,
  
    });

    // Save the post to the database
    await post.save();

    return res.status(200).json({ message: 'Post created successfully'});
  } catch (error) {
    console.error('Error creating post:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createRealEstate,
};