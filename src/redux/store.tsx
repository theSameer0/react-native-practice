import { createStore, combineReducers , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import langReducer from '../features/home/redux/reducer'
import featureReducer from '../features/search/redux/reducer'
import searchReducer from '../features/search/redux/reducer'
import movieReducer from '../features/MovieDetail/redux/reducer'
import bookingReducer from '~/features/MyBookings/redux/reducer'

const rootReducer = combineReducers({langReducer,featureReducer,searchReducer,movieReducer,bookingReducer})

export const Store = createStore(rootReducer , applyMiddleware(thunk));