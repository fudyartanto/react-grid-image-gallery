
import store from '../redux/Store'
import { GET_GALLERY } from '../redux/ActionTypes'
import Flickr from '../utils/Flickr';

window.getImagesCallback = (data) => {
  const image = ` `
  const payload = data.photos.photo.map((item) => {
    return {
      url: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_n.jpg`,
    }
  })
  store.dispatch({ type: GET_GALLERY.SUCCEED, payload })
}

export const getImages = (text) => {
  store.dispatch({ type: GET_GALLERY.REQUEST })
  const script = document.createElement('script')
  script.src = Flickr.getUrl({
    method: text ? 'flickr.photos.search' : 'flickr.photos.getRecent',
    callback: 'getImagesCallback',
    params: { text }
  })
  document.head.appendChild(script)
}
