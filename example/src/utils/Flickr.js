import { FLICKR_API_URL, FLICKR_API_KEY } from '../constants/Config'
import query from 'query-string'

export const getUrl = ({
  method,
  callback,
  params,
}) => {
  return `${FLICKR_API_URL}?method=${method}&jsoncallback=${callback}&api_key=${FLICKR_API_KEY}&format=json&${query.stringify(params)}`
}

export default {
  getUrl,
}
