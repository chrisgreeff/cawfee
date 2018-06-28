import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

export const history = syncHistoryWithStore(createBrowserHistory(), store)

export default store
