import { axiosWithAuth } from '../../utils/axiosWithAuth'


export const START_FETCHING = 'START_FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const ADD_FRIEND = 'ADD_FRIEND'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const REMOVE = 'REMOVE'
export const REMOVE_SUCCESS = 'REMOVE_SUCCESS'


export const fetchItem = () => dispatch => {
    
    dispatch({ type: START_FETCHING})
    axiosWithAuth()
    .get('/users')
    .then(res => {
        console.log(res)
        dispatch({ type: FETCH_SUCCESS, payload: res.data})})
    .catch(err => console.log('errorz', err))
}
