import { DATE_FROM_TO } from '../constants'

export default function dateRange( date = null) {
  // console.log('dateRangeAC', date.from, date.to)
  return {
    type: DATE_FROM_TO,
    payload: {
      from: date.from,
      to: date.to
    }
  }
}