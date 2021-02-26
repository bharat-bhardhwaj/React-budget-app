// get the store libraries
import { createStore, combineReducers, applyMiddleware } from 'redux'
//use redux thunk to  create actions for asynchronus request
import thunk from 'redux-thunk'
// To run the redux in inspect we use redux devtools extenstion
import { composeWithDevTools } from 'redux-devtools-extension'
// reducer
import { ListDataReducer } from './reducers/listDataReducer'

// combine our reducer
const reducer = combineReducers({
  listDataReducer: ListDataReducer,
})

const initialState = {}

const middleware = [thunk]
//create store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store
