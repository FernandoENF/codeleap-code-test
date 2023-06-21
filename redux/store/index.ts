import { legacy_createStore as createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'
import { IUser } from '@/redux/reducers/user/types'
import { IPost } from '@/types/postData'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export interface IState {
  user: IUser
  post: IPost
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }
