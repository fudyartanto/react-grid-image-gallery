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
      // nojsoncallback: 1,
    }
    console.log(config)
    resolve(config)
  })
}, function (error) {
  console.log(error)
  return Promise.reject(error)
})

axiosRetry(Api, { retries: 3 })

export default Api
