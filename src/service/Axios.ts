
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `https://6525210567cfb1e59ce6ae75.mockapi.io/`,

  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    withCredentials: true
  }
})

axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return error.response
  }
)

export default axiosInstance;

