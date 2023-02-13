import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { RootState } from '../domain/entity/rootState'
import alertReducer from './alert/reducer'
import collegesReducer from './colleges/reducer'
import profileReducer from './profile/reducer'
import validationReducer from './validation/reducer'

const store = createStore(
  combineReducers<RootState>({
    profile: profileReducer,
    colleges: collegesReducer,
    validation: validationReducer,
    alert: alertReducer,
  }),
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
