import { SET_SIDEBAR } from '../actions/sidebar'

export default function photos(state = [], action) {
  switch (action.type) {
    case SET_SIDEBAR:
      return action.payload
    default:
      return state
  }
}
