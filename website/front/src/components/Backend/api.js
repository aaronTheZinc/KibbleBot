import axios from 'axios'
require('dotenv').config()
const baseUrl = process.env.REACT_APP_BASE_URL
const header = {
    
}
const post = async({data, path, token}) => {
    const data = axios.post(`${baseUrl}${path}`, data, header )
}

export {post}