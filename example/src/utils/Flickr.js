import { FLICKR_API_URL, FLICKR_API_KEY } from '../constants/Config'
import query from 'query-string'

export const getQueryString = (object) => {
  let query = [];
  Object.keys(object).forEach((key) => {
    query.push(`${key}=${object[key]}`)
  })
  return query.join('&')
}

export const getUrl = ({
  method,
  callback,
  params,
}) => {
  return `${FLICKR_API_URL}?method=${method}&jsoncallback=${callback}&api_key=${FLICKR_API_KEY}&format=json&${getQueryString(params)}`
}

export default {
  getUrl,
}
