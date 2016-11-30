import { combineReducers } from 'redux'
import articles from './articles'
import count from './counter'
import filter from  './filter'

export default combineReducers({
    articles,
    count,
    filter
})