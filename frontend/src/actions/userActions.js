import axios from "axios";
import {
    // Actions pour la connexion utilisateur
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    // Actions pour l'enregistrement utilisateur
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    // Actions pour les détails utilisateur
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,
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

// Action pour la déconnexion utilisateur
export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_DETAILS_RESET})
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
           
        const { userLogin: { userInfo } } = getState()

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
