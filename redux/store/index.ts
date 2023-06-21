import { legacy_createStore as createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'
import { IUser } from '@/redux/reducers/user/types'
import { IPost } from '@/types/postData'

export interface IState {
  user: IUser
  post: IPost
}

const store = createStore(rootReducer)

export default store
