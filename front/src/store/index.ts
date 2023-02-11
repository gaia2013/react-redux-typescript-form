import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { RootState } from '../domain/entity/rootState'
import profileReducer from './profile/reducer'

const store = createStore(
  combineReducers<RootState>({
    profile: profileReducer
  }),
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
