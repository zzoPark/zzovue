import axios from 'axios'

const host = process.env.BACKEND_HOST
const port = process.env.BACKEND_PORT

export default () => {
  return axios.create({
    baseURL: 'http://' + host + ':' + port + '/'
  })
}
