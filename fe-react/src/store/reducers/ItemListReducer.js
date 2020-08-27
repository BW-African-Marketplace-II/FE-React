import {
START_FETCHING,
FETCH_SUCCESS,
ADD_SUCCESS,
ADD_ITEM,
DELETE_ITEM, 
DELETE_SUCCESS,
UPDATE_ITEM,
UPDATE_ITEM_SUCCESS

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
                        case ADD_ITEM:
                            return {
                                ...state
                            }
                        case DELETE_ITEM:
                            console.log(...state.data)
                            return {
                                ...state,
                                data: state.data.filter(value => value.id !== action.payload),
                                updated: true,
                                isFetching: true,
                            }
                            case DELETE_SUCCESS:
                                return {
                                    ...state,
                                    updated: false,
                                    // data: action.payload,
                                    data: [...action.payload.data],
                                    isFetching: false,
                                }
                                case UPDATE_ITEM:
                                    return { 
                                        ...state,
                                        updated: true
                                    }
                                    case UPDATE_ITEM_SUCCESS:
                                        console.log(action)
                                        return {
                                            ...state,
                                            data: [...action.payload.data],
                                            updated: false,
                                        }
                              
                               
               
            default:
                return state
        }
    }