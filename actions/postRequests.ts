import { IPost } from '@/types/postData'
import { api } from '@/actions/api'

export async function GetPosts(url?: string) {
  if (url) return await api.get(url).then((res) => res.data)
  return await api.get('/careers/').then((res) => res.data)
}

export async function CreatePost(post: IPost) {
  return await api.post('/careers/', post).then((res) => res.data)
}

export async function EditPost(post: IPost) {
  const { title, content } = post
  return await api
    .patch(
      `/careers/${post.id}/`,
      { title, content },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then((res) => res.data)
    .catch((err) => {
      console.log(err.response)
    })
}

export async function RemovePost(postId: number) {
  return await api.delete(`/careers/${postId}/`).then((res) => res.data)
}
