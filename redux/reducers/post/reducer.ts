import { Reducer } from 'redux'
import { produce } from 'immer'
import { IPost } from '@/types/postData'

const INITIAL_STATE: IPost = {
  id: 0,
  username: '',
  created_datetime: '',
  title: '',
  content: '',
}

const post: Reducer<IPost> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SET_CURRENT_POST': {
        const { post } = action.payload
        draft = post
        return draft
      }
      default: {
        return draft
      }
    }
  })
}

export default post
