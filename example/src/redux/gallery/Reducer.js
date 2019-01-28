export default (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_IMAGES':
      return {
        result: action.payload
      }
    default:
      return state
  }
}
