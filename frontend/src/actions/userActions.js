// import axios from "axios";
// import {
//     USER_LOGIN_REQUEST,
//     USER_LOGIN_SUCCESS,
//     USER_LOGIN_FAIL,
//     LOAD_USER_IF_EXIST,

//     USER_REGISTER_REQUEST,
//     USER_REGISTER_SUCCESS,
//     USER_REGISTER_FAIL,

//     USER_DETAILS_REQUEST,
//     USER_DETAILS_SUCCESS,
//     USER_DETAILS_FAIL,

//     USER_UPDATE_REQUEST,
//     USER_UPDATE_SUCCESS,
//     USER_UPDATE_FAIL,

//     USER_LOGOUT,

// } from "../constants/userConstants";

// export const login = (email, password) => async (dispatch) => {
//     try {
//         dispatch({
//             type: USER_LOGIN_REQUEST,
//         })

//         const config = {
//             headers: {
//                 'Content-type': 'application/json'
//             }
//         }

//         const { data } = await axios.post(
//             'api/users/login/',
//             { 'username': email, 'password': password },
//             config
//         )

//         dispatch({
//             type: USER_LOGIN_SUCCESS,
//             payload: data
//         })

//         localStorage.setItem('userInfo', JSON.stringify(data))

//     } catch (error) {
//         dispatch({
//             type: USER_LOGIN_FAIL,
//             payload: error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message,
//         })
//     }
// }

// export const loadAuthUser = (userLogin) => {
//     return { type: LOAD_USER_IF_EXIST, payload: userLogin }
// }

// export const logout = () => (dispatch) => {
//     localStorage.removeItem('userInfo')
//     dispatch({ type: USER_LOGOUT })
// }


// export const register = (name, lastname, email, password) => async (dispatch) => {
//     try {
//         dispatch({
//             type: USER_REGISTER_REQUEST
//         })

//         const config = {
//             headers: {
//                 'Content-type': 'application/json'
//             }
//         }

//         const { data } = await axios.post(
//             'api/users/register/',
//             { 'first_name': name, 'last_name': lastname, 'email': email, 'password': password },
//             config
//         )

//         dispatch({
//             type: USER_REGISTER_SUCCESS,
//             payload: data
//         })

//         dispatch({
//             type: USER_LOGIN_SUCCESS,
//             payload: data
//         })

//         localStorage.setItem('userInfo', JSON.stringify(data));
//     } catch (error) {
//         dispatch({
//             type: USER_REGISTER_FAIL,
//             payload: error.response && error.response.data.detail
//                 ? error.response.data.detail
//                 : error.message,
//         })
//     }
// }


// export const getUserDetails = (id) => async (dispatch, getState) => {
//     try {
//         dispatch({
//             type: USER_DETAILS_REQUEST
//         })

//         const { userLogin: { userInfo } } = getState()

//         const config = {
//             headers: {
//                 'Content-type': 'application/json',
//                 Authorization: `Bearer ${userInfo.token}`
//             }
//         }

//         const { data } = await axios.get(
//             `/api/users/${id}/`,
//             config
//         )

//         dispatch({
//             type: USER_DETAILS_SUCCESS,
//             payload: data
//         })


//     } catch (error) {
//         dispatch({
//             type: USER_DETAILS_FAIL,
//             payload: error.response && error.response.data.detail
//                 ? error.response.data.detail
//                 : error.message,
//         })
//     }
// }

// export const update = (name, lastname, email, password) => async (dispatch, getState) => {
//     try {
//         // Dispatch USER_UPDATE_REQUEST action to inform the state that an update request is in progress
//         dispatch({
//             type: USER_UPDATE_REQUEST
//         });

//         // Get the user's token from the state
//         const { userLogin: { userInfo } } = getState();

//         // Set the headers for the API request, including the user's token
//         const config = {
//             headers: {
//                 'Content-type': 'application/json',
//                 Authorization: `Bearer ${userInfo.token}`
//             }
//         };

//         // Make the API request to update the user's profile with the new information
//         const { data } = await axios.put(
//             '/api/users/profile/update/',
//             { 'first_name': name, 'last_name': lastname, 'email': email, 'password': password },
//             config
//         );

//         // Dispatch USER_UPDATE_SUCCESS action with the updated user data
//         dispatch({
//             type: USER_UPDATE_SUCCESS,
//             payload: data
//         })

//         dispatch({
//             type: USER_LOGIN_SUCCESS,
//             payload: data
//         })

//         // Store the updated user data in localStorage
//         localStorage.setItem('userInfo', JSON.stringify(data));
//     } catch (error) {
//         // If there is an error, dispatch USER_UPDATE_FAIL action with the error message
//         dispatch({
//             type: USER_UPDATE_FAIL,
//             payload: error.response && error.response.data.detail
//                 ? error.response.data.detail
//                 : error.message,
//         });
//     }
// };


import axios from "axios";
import {
    // Actions pour la connexion utilisateur
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    LOAD_USER_IF_EXIST,
    // Actions pour l'enregistrement utilisateur
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    // Actions pour les détails utilisateur
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    // Actions pour la mise à jour utilisateur
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,
    // Action pour la déconnexion utilisateur
    USER_LOGOUT,
} from "../constants/userConstants";

// Action pour la connexion utilisateur
export const login = (email, password) => async (dispatch) => {
    try {
        // Dispatch USER_LOGIN_REQUEST pour informer l'état qu'une requête est en cours
        dispatch({
            type: USER_LOGIN_REQUEST,
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        // Effectuer une demande de connexion à l'API
        const { data } = await axios.post(
            'api/users/login/',
            { 'username': email, 'password': password },
            config
        )

        // Dispatch USER_LOGIN_SUCCESS pour informer l'état de la réussite de la connexion et envoyer les données utilisateur
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        // Enregistrer les données utilisateur dans le localStorage
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        // Dispatch USER_LOGIN_FAIL pour informer l'état de l'échec de la connexion et envoyer un message d'erreur
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

// Action pour charger les données utilisateur stockées dans le localStorage
export const loadAuthUser = (userLogin) => {
    return { type: LOAD_USER_IF_EXIST, payload: userLogin }
}

// Action pour la déconnexion utilisateur
export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}

// Action pour l'enregistrement utilisateur
export const register = (name, lastname, email, password) => async (dispatch) => {
    try {
        // Dispatch USER_REGISTER_REQUEST pour informer l'état qu'une requête est en cours
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        // Effectuer une demande d'enregistrement à l'API
        const { data } = await axios.post(
            'api/users/register/',
            { 'first_name': name, 'last_name': lastname, 'email': email, 'password': password },
            config
        )

        // Dispatch USER_REGISTER_SUCCESS pour informer l'état de la réussite de l'enregistrement et envoyer les données utilisateur
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        // Dispatch USER_LOGIN_SUCCESS pour connecter immédiatement l'utilisateur après l'enregistrement et envoyer les données utilisateur
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        // Enregistrer les données utilisateur dans le localStorage
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        // Dispatch USER_REGISTER_FAIL pour informer l'état de l'échec de l'enregistrement et envoyer un message d'erreur
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

// Action pour obtenir les détails d'un utilisateur
export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        // Dispatch USER_DETAILS_REQUEST pour informer l'état qu'une requête est en cours
        dispatch({
            type: USER_DETAILS_REQUEST,
        })

                
        // const { userLogin: { userInfo } } = getState()
        let userInfo = getState().userLogin.userInfo;

        if (!userInfo) {
            // Récupérer le token depuis le localStorage
            const storedUserInfo = localStorage.getItem('userInfo');
            if (storedUserInfo) {
                userInfo = JSON.parse(storedUserInfo);
            }
        }

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        // Effectuer une demande pour obtenir les détails d'un utilisateur à l'API
        const { data } = await axios.get(`api/users/${id}/`, config)

        // Dispatch USER_DETAILS_SUCCESS pour informer l'état de la réussite de la demande et envoyer les détails de l'utilisateur
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        // Dispatch USER_DETAILS_FAIL pour informer l'état de l'échec de la demande et envoyer un message d'erreur
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

// Action pour mettre à jour les détails d'un utilisateur
export const updateUserProfile = (name, lastname, email, password) => async (dispatch, getState) => {
    try {
        // Dispatch USER_UPDATE_REQUEST pour informer l'état qu'une requête est en cours
        dispatch({
            type: USER_UPDATE_REQUEST,
        })
        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        // Effectuer une demande pour mettre à jour les détails de l'utilisateur à l'API
        const { data } = await axios.put(
            '/api/users/profile/update/',
            { 'first_name': name, 'last_name': lastname, 'email': email, 'password': password },
            config
        )

        // Dispatch USER_UPDATE_SUCCESS pour informer l'état de la réussite de la demande et envoyer les données mises à jour de l'utilisateur
        dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: data,
        })

        // Dispatch USER_LOGIN_SUCCESS pour mettre à jour les données utilisateur dans le localStorage
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })

        // Enregistrer les données utilisateur mises à jour dans le localStorage
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        // Dispatch USER_UPDATE_FAIL pour informer l'état de l'échec de la demande et envoyer un message d'erreur
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}
