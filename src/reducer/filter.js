import { SELECT_ARTICLE, DATE_FROM_TO } from '../constants'

const initialState = {
  from: null,
  to: null,
  selected: null
}

export default (state = initialState, action) => {
    const { type, payload } = action
    
    switch (type) {
      case SELECT_ARTICLE:
        return {...state, selected: payload.selected}

      case DATE_FROM_TO:
        return {...state, from: payload.from, to: payload.to}
    }

  return state
}
