import { configureStore } from '@reduxjs/toolkit'
import { articleListReducers, articleDetailReducers } from './reducers/articleReducers'

const store = configureStore({
    reducer: {
        articleList: articleListReducers,
        articleDetails: articleDetailReducers,
    }
})

export default store
