import { SELECT_ARTICLE } from '../constants'
const initialState = {
  selected: null
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SELECT_ARTICLE: return {...state, selected: payload.articleId}
  }

  return state
}