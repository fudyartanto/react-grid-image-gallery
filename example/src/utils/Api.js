import axios from 'axios'
import Config from '../constants/Config'
import axiosRetry from 'axios-retry'

const Api =  axios.create({
  baseURL: 'https://api.flickr.com/services/rest/',
})

Api.interceptors.request.use(function (config) {
  return new Promise((resolve) => {
    config.params = {
      api_key: Config.FLICKR_API_KEY,
      format: 'json',
    }
    resolve(config)
  })
}, function (error) {
  return Promise.reject(error)
})

axiosRetry(Api, { retries: 3 })

export default Api
