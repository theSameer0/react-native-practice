import { createStore, combineReducers , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import langReducer from './reducer'

const rootReducer = combineReducers({langReducer})

export const Store = createStore(rootReducer , applyMiddleware(thunk));