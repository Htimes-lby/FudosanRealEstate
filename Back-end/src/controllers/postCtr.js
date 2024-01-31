const RealEstate = require('../models/realEstateModel')
const User = require('../models/userModel')
const Agent = require('../models/agentsModel')

const createRealEstate = async (req, res) => {
  console.log(req.body)
  try {
    const {
      realEstateInfo
    } = req.body; // Use req.body to access request body data
  
    // Check if the arrays are defined
    const newPrivacyDataArray = JSON.parse(realEstateInfo);
    
    const filepaths = req.files.map((file) => file.path);
    let getUser = await User.findOneAndUpdate({ _id: newPrivacyDataArray.poster }, {$set:{age:newPrivacyDataArray.getUser.age,email:newPrivacyDataArray.getUser.email,phoneNumber:newPrivacyDataArray.getUser.phoneNumber,name:newPrivacyDataArray.getUser.name}});
      
        let post
        if(newPrivacyDataArray.label ==='post-building'){
          const postTemp = new RealEstate({
            address:newPrivacyDataArray.address,
            briefDescription:newPrivacyDataArray.briefDescription,
            fullDescription:newPrivacyDataArray.fullDescription,
            basicInfoBuilding: newPrivacyDataArray.basicInfoBuilding,
            images:filepaths,
            poster:newPrivacyDataArray.poster,
            label: 'building',
          });
          post = postTemp;
          
        }
      
        else{
          const postTemp = new RealEstate({
            address:newPrivacyDataArray.address,
            briefDescription:newPrivacyDataArray.briefDescription,
            fullDescription:newPrivacyDataArray.fullDescription,
            basicInfoLand: newPrivacyDataArray.basicInfoLand,
            images:filepaths,
            poster:newPrivacyDataArray.poster,
            label: 'land',
          })
          post = postTemp;
        }
  
    

    // Save the post to the database
    await post.save();

    return res.status(200).json({ message: 'Post created successfully'});
  } catch (error) {
    
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createAgent = async (req, res) => {
  try{
    const {agentInfo} = req.body
    const newAgentInfo = JSON.parse(agentInfo);
    const qualificationCopy = req.files.map((file) => file.path);
    console.log(qualificationCopy);
    let getUser = await User.findOneAndUpdate({ _id: newAgentInfo.posterId }, {$set:{email:newAgentInfo.agentEmail,phoneNumber:newAgentInfo.phoneNumber,name:newAgentInfo.agentName}});
    

    const postAgent = new Agent({
      posterId:newAgentInfo.posterId,
      agentName:newAgentInfo.agentName,
      agentEmail:newAgentInfo.agentEmail,
      address:newAgentInfo.address,
      category:newAgentInfo.category,
      phoneNumber:newAgentInfo.phoneNumber,
      companyName:newAgentInfo.companyName,
      content:newAgentInfo.content,
      qualificationCopy:qualificationCopy,

    });

    await postAgent.save();

    return res.status(200).json({ message: 'Post created successfully'});
  

  }catch(error){
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  createRealEstate,
  createAgent,
};