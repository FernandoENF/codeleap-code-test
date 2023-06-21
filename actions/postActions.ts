import { IPost } from '@/types/postData'

export function setCurrentPost(post: IPost) {
  return {
    type: 'SET_CURRENT_POST',
    payload: {
      post,
    },
  }
}
