import { SELECT_ARTICLE, DATE_FROM_TO } from '../constants'

const initialState = {
  fromTo: {
    from: null,
    to: null
  },
  selected: []
}

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
      case SELECT_ARTICLE:
        return {...state, selected: payload.selected}

      case DATE_FROM_TO:
        return {...state, fromTo: payload.date}
    }

  return state
}
