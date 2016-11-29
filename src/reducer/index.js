import { combineReducers } from 'redux'
import articles from './articles'
import count from './counter'
import dateRange from  './dateRange'
import selectedArticle from './selectedArticle'

export default combineReducers({
    articles,
    count,
    dateRange,
    selectedArticle
})