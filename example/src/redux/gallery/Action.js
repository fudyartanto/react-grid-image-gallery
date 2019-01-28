export const getImages = () => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: {
      images: [1, 2, 3]
    }
  })
 }
