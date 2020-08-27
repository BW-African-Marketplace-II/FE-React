import { combineReducers } from 'redux'
import { LoginReducer } from './LoginReducer'
import { ItemListReducer } from './ItemListReducer'


export default combineReducers({
    LoginReducer, 
    ItemListReducer
})