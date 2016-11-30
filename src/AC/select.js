import { SELECT_ARTICLE } from '../constants'

export default function select(selected = null) {
  return {
    type: SELECT_ARTICLE,
    payload: {
      selected
    }
  }
}
