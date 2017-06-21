import {FETCHING_DATA,FETCHING_DATA_SUCCESS,FETCHING_DATA_ERROR} from '../constants'
import {REHYDRATE} from  'redux-persist/constants'
const initialState = {
    data: [],
    isFetching: false,
    error: false
}

export default dataReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_DATA: 
            return{
                ...state,
                data: [],
                isFetching: true
            }
        case FETCHING_DATA_SUCCESS:
            return{
                data: action.data,
                isFetching: false
            }
        case FETCHING_DATA_ERROR:
            return{
                ...state,
                isFetching: false,
                error: true
            }
        case REHYDRATE:
            return {...state, ...action.payload.dataReducer}
        default: 
            return state
    }
}