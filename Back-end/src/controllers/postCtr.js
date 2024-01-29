const Post = require('../models/postModel')
const RealEstate = require('../models/realEstateModel')
const User = require('../models/userModel')

const createRealEstate = async (req, res) => {
   console.log(req.files)
  try {
    const {
      privacyDataArray,
      contentDataArray,
      overviewHouseDataArray,
      
    } = req.body; // Use req.body to access request body data
    
    // Check if the arrays are defined
    const newPrivacyDataArray = JSON.parse(privacyDataArray);
    const newContentDataArray = JSON.parse(contentDataArray);
    const newOverviewHouseDataArray = JSON.parse(overviewHouseDataArray);

    const privacyData = newPrivacyDataArray ? newPrivacyDataArray.reduce((acc, data) => ({ ...acc, ...data }), {}) : {};
    const descriptionData = newContentDataArray ? newContentDataArray.reduce((acc, data) => ({ ...acc, ...data }), {}) : {};
    const basicInfoData = newOverviewHouseDataArray ? newOverviewHouseDataArray.reduce((acc, data) => ({ ...acc, ...data }), {}) : {};
    
    
    const newphoneNumberData = privacyData.phoneNumber[0]+privacyData.phoneNumber[1]+privacyData.phoneNumber[2];
    const newZipCodeData = privacyData.postalNumber[0]+privacyData.postalNumber[1]
    const addressData = {zipCode: newZipCodeData, province:privacyData.province, city:privacyData.city, street:privacyData.street};
    const newBasicInfoData = {budget:basicInfoData.budget, layout:basicInfoData.layout,
                              landarea:basicInfoData.landarea,buildingArea:basicInfoData.buildingarea, 
                              deadline:basicInfoData.deadline,parking:basicInfoData.parking}
    const filepaths = req.files.map((file) => file.path);
    
    const post = new RealEstate({
      address:addressData,
      briefDescription:descriptionData.briefDescription,
      fullDescription:descriptionData.fullDescription,
      basicInfoBuilding: newBasicInfoData,
      images:filepaths,
        
    });
    

    // Save the post to the database
    await post.save();

    return res.status(200).json({ message: 'Post created successfully'});
  } catch (error) {
    
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createRealEstate,
};