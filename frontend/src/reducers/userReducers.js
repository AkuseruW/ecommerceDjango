import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    LOAD_USER_IF_EXIST
} from "../constants/userConstants";

export const userLoginReducers = (state = { }, action) => {
    switch (action.type) {
        case LOAD_USER_IF_EXIST:
            return { authUserInfo: action.payload }

        case USER_LOGIN_REQUEST:
            return { loading: true }

        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return { }

        default:
            return state
    }
}