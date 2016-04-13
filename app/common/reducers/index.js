import { combineReducers } from 'redux'
import counter from './counter'
import sidebar from './sidebar'

const rootReducer = combineReducers({
  sidebar,
  counter
})

export default rootReducer
