import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {
ListDataReducer
}from './reducers/listDataReducer';
const reducer = combineReducers({
    listDataReducer:ListDataReducer,

})

const initialState={

}
const middleware=[thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;