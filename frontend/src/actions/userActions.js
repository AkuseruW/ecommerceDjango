import axios from "axios";
import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOAD_IF_EXIST,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
    try{
        dispatch({
            type:USER_LOGIN_REQUEST,
        })

        const config = {
            headers:{
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.post(
            'api/users/login/',
            {'username': email, 'password': password},
            config
        )

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    }catch(error){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
}

export const loadUser = (userInfo) => {
    return { type: USER_LOAD_IF_EXIST, payload: userInfo }
}