import { configureStore } from '@reduxjs/toolkit'
import { articleListReducers, articleDetailReducers } from './reducers/articleReducers'
import { cartReducer } from './reducers/cartReducers'


const cartItemsStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: { cartItems:cartItemsStorage }
}

const store = configureStore({
    reducer: {
        articleList: articleListReducers,
        articleDetails: articleDetailReducers,
        cart: cartReducer,
    },initialState
})

export default store
