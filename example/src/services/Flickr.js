import Api from '../utils/Api';
import Config from '../constants/Config'

export const searchImages = (text) => {
  return new Promise((resolve, reject) => {
    Api.post('', {
      method: 'flickr.photos.search',
      text,
    }).then((data) => {
      resolve(data)
    }).catch((error) => {
      console.log(error)
      reject('Ups! Something went wrong')
    })
  })
}

export default {
  searchImages,
}
