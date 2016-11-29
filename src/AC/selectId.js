import { SELECT_ARTICLE } from '../constants'

export default function selectId(articleId) {
  console.log('selectId', articleId)
  return {
    type: SELECT_ARTICLE,
    payload: {
      articleId
    }
  }
}