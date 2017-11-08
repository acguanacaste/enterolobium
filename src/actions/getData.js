import {FETCHING_DATA,FETCHING_DATA_SUCCESS,FETCHING_DATA_ERROR,REHYDRATE} from '../constants'
import {getDataApi3} from '../api/api'
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

export const fetchDataDetails = (item) => {
    return(dispatch) =>{
        dispatch(getData())
            getDataApi3(item)
            .then(([response,json])=>{
                dispatch(getDataSuccess(json))
            })
            .catch((err) => dispatch(getDataFailure(err)))      
    }
}