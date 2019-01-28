
import store from '../redux/Store'
import { GET_GALLERY } from '../redux/ActionTypes'
import Flickr from '../utils/Flickr';

const PER_PAGE = 96

window.getImagesCallback = (data) => {
  const images = data.photos.photo.map((item) => {
    return {
      title: item.owner,
      description: item.title,
      url: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_n.jpg`,
      fullSizeUrl: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_h.jpg`,
    }
  })
  store.dispatch({ type: GET_GALLERY.SUCCEED, payload: {
    images,
    page: data.photos.page,
  }})
}

export const getImages = ({
  text,
  page,
}) => {
  page = page ? page : 1

  store.dispatch({ type: GET_GALLERY.REQUEST })

  const script = document.createElement('script')
  script.src = Flickr.getUrl({
    method: text ? 'flickr.photos.search' : 'flickr.photos.getRecent',
    callback: 'getImagesCallback',
    params: { text, per_page: PER_PAGE, page }
  })
  document.head.appendChild(script)
}
