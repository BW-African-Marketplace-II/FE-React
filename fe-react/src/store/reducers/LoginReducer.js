const initialState = {
    data: [],
    isFetching: false,
    error: '',
    updated: false,
    isSaving: false
    }

    export const LoginReducer = (state = initialState, action) => {
        switch(action.type) {
            
            case "START_FETCHING_LOGIN":
                console.log(state, action)
                return {
                    ...state,
                    isFetching: true,
                    updated: false
                }
                case "FETCH_LOGIN_SUCCESS":
                    return {
                        ...state,
                        isFetching: false,
                        error: '',
                        data: action.payload,
                        update: false,
                    }
                    case "FETCH_LOGIN_FAILURE":
                        return {
                            ...state
                        }
                    case "ADD_SUCCESS":
                        return {
                            ...state,
                            updated: true
                        }        
            default:
                return state
        }
    }