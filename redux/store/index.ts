import { legacy_createStore as createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'
import { IUser } from '@/redux/reducers/user/types'

export interface IState {
  user: IUser
}

const store = createStore(rootReducer)

export default store
