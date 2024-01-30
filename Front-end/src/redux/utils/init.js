import axios from "axios"
// import { notification } from 'antd'

const initializeApp = () => {

    // Setting base URL for all API request via axios
    axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL

    // window.Notification = notification

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        // dev code



    } else {
        // Prod build code



        // Removing console.log from prod
        console.log = () => { };


        // init analytics here
    }

}

export default initializeApp