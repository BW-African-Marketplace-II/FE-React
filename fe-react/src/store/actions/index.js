import { axiosWithAuth } from '../../utils/axiosWithAuth'


export const START_FETCHING = 'START_FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const ADD_ITEM = 'ADD_ITEM'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const DELETE_ITEM = 'DELETE_ITEM'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const UPDATE_ITEM = "UPDATE_ITEM"
export const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS"


export const editItem = (item, id) => dispatch => {
    console.log(item)
    dispatch({ type: UPDATE_ITEM })
    axiosWithAuth()
    .put(`/items/${id}`, item)
    .then(res => {
        console.log(res.data)
        dispatch({ type: UPDATE_ITEM_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const deleteItem = item => {
    console.log(item)
    console.log(item)
    const removeItem = axiosWithAuth()
    .delete(`/items/${item.id}`, item)
    return (dispatch) => {
        dispatch({type: DELETE_ITEM }).
        then(({data}) => {
            console.log(data)
            dispatch({ type: DELETE_SUCCESS, payload: data})
            
            // window.location.reload(false);
        })
    }
}


export const fetchItem = () => dispatch => {
    
    dispatch({ type: START_FETCHING})
    axiosWithAuth()
    .get('/items')
    .then(res => {
        console.log(res.data)
        dispatch({ type: FETCH_SUCCESS, payload: res.data})})
    .catch(err => console.log('errorz', err))
}

export const fetchItemId = (item) => dispatch => {
    console.log(item)
    dispatch({ type: START_FETCHING})
    axiosWithAuth()
    .get(`/items/${item.id}`)
    .then(res => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data})})
    .catch(err => console.log('errorz', err))
}

export const login = (user) => (dispatch) => {
    dispatch({ type: LOGIN_START })
    return axiosWithAuth()
    .post('/users/login', user)
    .then((res) => {
        console.log(res.data)
        localStorage.setItem("token", res.data.token)
        
    })
    .catch((err) => 
    dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message}))
}

export const register = (user) => (dispatch) => {
    dispatch({ type: LOGIN_START })
    return axiosWithAuth()
    .post('/users/register', user)
    .then((res) => {
        console.log(res.data)
        localStorage.setItem("token", res.data.token)
        
    })
    .catch((err) => 
    dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message}))
}

export const addItem = (item) => {
    console.log(item)
    const newItem = axiosWithAuth()
    .post('/items', item)
    return (dispatch) => {
        dispatch({ type: ADD_ITEM })
        newItem
        .then(({data}) => {
            dispatch({ type: ADD_SUCCESS, payload: data})
        })
        .catch((err) => {
            console.log(err, 'errorz')
        })
    }
}


