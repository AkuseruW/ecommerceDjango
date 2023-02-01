import axios from 'axios'
import {
    ARTICLE_LIST_REQUEST,
    ARTICLE_LIST_SUCCESS,
    ARTICLE_LIST_FAIL,

    ARTICLE_DETAILS_REQUEST,
    ARTICLE_DETAILS_SUCCESS,
    ARTICLE_DETAILS_FAIL,
} from '../constants/articleConstants'

export const listArticles = () => async (dispatch) => {
    try { 
        dispatch({ type: ARTICLE_LIST_REQUEST })
        const { data } = await axios.get('/api/articles/')
        dispatch({
            type: ARTICLE_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:ARTICLE_LIST_FAIL,
            payload:error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
}

export const listArticleDetails = (slug) => async (dispatch) => {
    try {
        dispatch({ type: ARTICLE_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/articles/${slug}`)

        dispatch({
            type: ARTICLE_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ARTICLE_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}