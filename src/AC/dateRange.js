import { DATE_FROM_TO } from '../constants'

export default function dateRange( date) {
  return {
    type: DATE_FROM_TO,
    payload: {
      date
    }
  }
}