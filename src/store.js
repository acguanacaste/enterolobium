import {createStore, applyMiddleware} from 'redux'
import getRoootReducer from './reducers'
import thunk from 'redux-thunk'

export default function getStore(navReducer){
    return store = createStore(getRoootReducer(navReducer),undefined,applyMiddleware(thunk))
}