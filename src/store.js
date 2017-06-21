import { AsyncStorage } from 'react-native'
import {createStore, applyMiddleware,compose} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import getRoootReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

var middlewares = compose(applyMiddleware(thunk,logger), autoRehydrate({log:true}))

export default function getStore(navReducer){
    return store = createStore(getRoootReducer(navReducer),undefined,middlewares)
     persistStore(store, {storage: AsyncStorage},() => console.log("Hola Mundo"))
}

