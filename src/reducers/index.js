import {combineReducers} from 'redux'
import dataReducer from './dataReducer'
import detailsReducer from './detailsReducer'
import infoReducer from './infoReducer'
export default function getRootReducer(navReducer){
    return combineReducers({
        nav: navReducer,
        data: dataReducer,
        detailsReducer: detailsReducer,
        infoReducer: infoReducer
    })
}