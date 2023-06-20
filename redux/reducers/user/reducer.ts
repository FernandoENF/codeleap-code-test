import { IUser } from '@/redux/reducers/user/types'
import { Reducer } from 'redux'
import { produce } from 'immer'

const INITIAL_STATE: IUser = {
  username: '',
}

const user: Reducer<IUser> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ENTER_USERNAME': {
        const { username } = action.payload.user
        return draft
      }
      default: {
        return draft
      }
    }
  })
}

export default user
