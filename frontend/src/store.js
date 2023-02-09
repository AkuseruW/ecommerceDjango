import { configureStore } from '@reduxjs/toolkit'
import { articleListReducers, articleDetailReducers } from './reducers/articleReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducers, userRegisterReducers } from './reducers/userReducers'


const cartItemsStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    cart: { cartItems:cartItemsStorage },
    userLogin : {userInfo:userInfoStorage}
}

const store = configureStore({
    reducer: {
        articleList: articleListReducers,
        articleDetails: articleDetailReducers,
        cart: cartReducer,
        userLogin: userLoginReducers,
        userRegister:userRegisterReducers,
    },initialState
})

export default store
