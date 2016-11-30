import { SELECT_ARTICLE } from '../constants'

export default function selectId( selected = null) {
  // console.log('selectAC', selected)
  return {
    type: SELECT_ARTICLE,
    payload: {
      selected
    }
  }
}