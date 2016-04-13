import { SET_SIDEBAR } from '../actions'

export default function photos(state = [], action) {
  switch (action.type) {
    case SET_SIDEBAR:
      return action.payload
    default:
      return state
  }
}
