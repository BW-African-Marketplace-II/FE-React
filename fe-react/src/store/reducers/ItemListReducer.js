import {
START_FETCHING,
FETCH_SUCCESS,
ADD_SUCCESS
} from '../actions'

const initialState = {
    data: [],
    isFetching: false,
    error: '',
    updated: false,
    isSaving: false
    }

    export const ItemListReducer = (state = initialState, action) => {
        switch(action.type) {
            
            case START_FETCHING:
                console.log(state, action)
                return {
                    ...state,
                    isFetching: true,
                    updated: false
                }
                case FETCH_SUCCESS:
                    return {
                        ...state,
                        isFetching: false,
                        error: '',
                        data: action.payload,
                        update: false,
                    }
                    case ADD_SUCCESS:
                        return {
                            ...state,
                            updated: true
                        }
                        // case "ADD_FRIEND":
                        //     return {
                        //         ...state
                        //     }
                        // case "REMOVE":
                        //     console.log(...state.data)
                        //     return {
                                
                        //         ...state,
                                
                        //         data: state.data.filter(value => value.id !== action.payload),
                                
                        //         // updated: true,
                        //         isFetching: true,
                        //     }
                        //     case "REMOVE_SUCCESS":
                        //         return {
                        //             ...state,
                        //             // updated: true,
                        //             // data: action.payload,
                        //             isFetching: false,
                        //         }
                        //         case "LOGIN_START":
                        //             return {
                        //                 ...state
                        //             }
                        //             case "LOGIN_SUCCESS":
                        //                 return {
                        //                     ...state,
                        //                     data: action.payload
                        //                 }
                        //                 case "LOGIN_FAILURE":
                        //                     return {...state}
                          
            default:
                return state
        }
    }