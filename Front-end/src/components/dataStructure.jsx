const loginUserModel = {
    _id: '',
    name: {
        firstNameGanji: '',
        lastNameGanji: '',
        firstNameGana: '',
        lastNameGana: '',
    },
    email: '',
    password: '',
}
const userModel = {
    _id: '',
    name: {
        firstNameGanji: '',
        lastNameGanji: '',
        firstNameGana: '',
        lastNameGana: '',
    },
    age: 23,
    mail:'',
    phoneNumber: '+81501587316',
    myFavourites: 'realEstateIds',
    myPosts: 'realEstateIds',
}
const realEstateModel = {
    _id:'',
    address: {
        zipCode:'',
        province:'',
        city:'',
        street:'',
    },
    images: [],
    briefDescription: '',
    fullDescription: '',
    basicInfo: {
        budget: '',
        layout: '',
        landarea: '',
        buildingarea: '',
        deadline: '',
        parking: '',
    },
    realEstateCategory: 'gominga',
    approved: true,
}
const agentModel = {
    _id: '',
    agentName: '',
    companyName: '',
    email: '',
    phoneNumber:'',
    content: '',
    agentCategory: '',
    address: {
        zipCode: '',
        province: '',
        city: '',
        street: '',
    },
    qualificationCopy: '',
    approved: '',
}
const messageModel = {
    _id:'',
    sender: {
        senderId:'',
        fullName:'',
    },
    receiver: {
        receiver:'',
        fullName:'',
    },
    content:'',
    date:'',
    status:'unread',
}
const contactModel = {
    _id:'',
    category:'query or reply',
    content:'',
    date:'',
    status:'',
}