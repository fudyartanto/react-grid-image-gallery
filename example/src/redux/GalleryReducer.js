import { GET_GALLERY } from './ActionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case GET_GALLERY.REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_GALLERY.SUCCEED:
      return {
        ...state,
        isLoading: false,
        images: action.payload.images,
        page: action.payload.page,
      }
    default:
      return state
  }
}
