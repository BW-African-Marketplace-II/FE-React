import {
    LOGIN_SUCCESS,
    LOGIN_START,
    LOGIN_FAILURE
} from '../actions'


const initialState = {
    data: [],
    isFetching: false,
    }

    export const LoginReducer = (state = initialState, action) => {
        switch(action.type) {
            
            case LOGIN_START:
                console.log(state, action)
                return {
                    ...state,
                }
                case LOGIN_SUCCESS:
                    return {
                        ...state,
                        data: action.payload,
                    }
                    case LOGIN_FAILURE:
                        return {
                            ...state
                        }
            default:
                return state
        }
    }