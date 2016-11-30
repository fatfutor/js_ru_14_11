import { articles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'

const initialState = {
    articles
}

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return {...state, articles: state.articles.filter(article => article.id != payload.articleId)}
    }

    return state
}
