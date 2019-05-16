import axios from 'axios'

const basehost = (process.env.NODE_ENV === 'development') ? 'localhost' : 'zzovlog.com'

export default () => {
  return axios.create({
    baseURL: 'http://' + basehost + ':8000/'
  })
}
