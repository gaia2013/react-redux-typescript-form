import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Colleges } from '../../domain/entity/college'
import collegesActions from './actions'

const init: Colleges = { search: '' }

const collegesReducer = reducerWithInitialState(init).case(
  collegesActions.setSearchWord,
  (state, payload) => ({
    ...state,
    search: payload,
  })
)

export default collegesReducer
