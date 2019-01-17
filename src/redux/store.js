import { createStore, combineReducers } from 'redux'
import { INITIAL_STATE } from '../constants/state'
import { count } from './reducers'

export const store = createStore(combineReducers({count}), INITIAL_STATE)