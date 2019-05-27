import axios from 'axios'

const host = process.env.VUE_APP_BACKEND_HOST
const port = process.env.VUE_APP_BACKEND_PORT

const api = axios.create({
    baseURL: 'http://' + host + ':' + port + '/',
    timeout: 5000
})

api.interceptors.request.use((config) => {
  if (config.method === 'post' && config.url !== 'login'
      && typeof $cookies !== "undefined") {
    // eslint-disable-next-line
    let token = $cookies.get('token')
    config.headers.common['Authorization'] = `Token ${token}`
  }
  return config
}, (error) => {
  // eslint-disable-next-line
  console.error(error)
  return Promise.reject(error)
})

api.interceptors.response.use((response) => {
  return response
}, (error) => {
  // eslint-disable-next-line
  console.error(error)
  return Promise.reject(error)
})

export default api
