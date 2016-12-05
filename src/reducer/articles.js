import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { Map, List } from 'immutable'

// const defaultArticles = normalizedArticles.reduce((acc, articles) => {
//     return acc.set(articles.id, articles)
// }, new Map({}))

export default (articlesState = normalizedArticles, action) => {
    const { type, payload, generateId } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id != payload.articleId)

        case ADD_COMMENT:
            let newArticlesState = [...articlesState]

            newArticlesState.forEach(article => {
                if (article.id === payload.articleId) {
                    article.comments.push(generateId)
                }
            })
            console.log(newArticlesState)
            return newArticlesState
    }

    return articlesState
}
