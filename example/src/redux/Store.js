import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './RootReducer'

const middleware = [
  thunk,
]

const initialState = {
  gallery: {
    isLoading: false,
    images: []
  }
}

const enchancer = compose(
  applyMiddleware(...middleware),
)

export default createStore(rootReducer, initialState, enchancer)
