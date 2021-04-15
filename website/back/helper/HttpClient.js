import axios from 'axios'
import qs from 'qs'

const generateToken = async () => {
  const {
    data: {access_token},
  } = await axios.post(
    'https://accounts.spotify.com/api/token',
    qs.stringify({
      grant_type: 'client_credentials',
    }),
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: process.env.CLIENT_ID,
        password: process.env.CLIENT_SECRET,
      },
    },
  )
  return access_token
}

const HttpClient = axios.create({
  baseURL: 'https://api.spotify.com/v1',
})

const handleRequest = async (config) => {
  const token = await generateToken()
  config.headers.Authorization = `Bearer ${token}`
  return config
}
const handleResponse = ({data}) => data
const handleError = (error) => Promise.reject(error)
HttpClient.interceptors.response.use(handleResponse, handleError)
HttpClient.interceptors.request.use(handleRequest, handleError)

export {HttpClient}