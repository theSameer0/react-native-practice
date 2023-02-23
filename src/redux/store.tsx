import { createStore, combineReducers , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import langReducer from '../features/home/redux/reducer'
import featureReducer from '../features/search/redux/reducer'

const rootReducer = combineReducers({langReducer,featureReducer})

export const Store = createStore(rootReducer , applyMiddleware(thunk));