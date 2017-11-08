import {FETCHING_DATA,FETCHING_DATA_SUCCESS,FETCHING_DATA_ERROR,REHYDRATE} from '../constants'
import {getDataApi} from '../api/api'
import {NetInfo} from 'react-native'

export const getData = () => {
    return{
        type: FETCHING_DATA
    }
}

export const getDataSuccess = data => {
    return{
        type: FETCHING_DATA_SUCCESS,
        data
    }
}

export const getDataFailure = () => {
    return{
        type: FETCHING_DATA_ERROR
    }
}


//async thunk fetchData

export const fetchData = (item) => {
    return(dispatch) =>{
        dispatch(getData())
            getDataApi(item)
            .then(([response,json])=>{
                dispatch(getDataSuccess(json))
            })
            .catch((err) => dispatch(getDataFailure(err)))      
    }
}
