import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { articleListReducers, articleDetailReducers } from './reducers/articleReducers'

const reducer = combineReducers({
    articleList: articleListReducers,
    articleDetails: articleDetailReducers,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
