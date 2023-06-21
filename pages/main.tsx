import RootLayout from '@/components/layouts/RootLayout'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/Input'
import TextArea from '@/components/inputs/TextArea'
import MainLayout from '@/components/layouts/MainLayout'
import { useSelector } from 'react-redux'
import PostCard from '@/components/cards/PostCard'
import { IState } from '@/redux/store'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IPost } from '@/types/postData'
import { InView } from 'react-intersection-observer'
import { CreatePost, GetPosts } from '@/actions/postRequests'
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import BackToTopButton from '@/components/buttons/BackToTopButton'

export default function MainPage() {
  const router = useRouter()
  const username = useSelector<IState, string>((state) => state.user.username)

  const { register, watch, handleSubmit } = useForm<{
    username: string
    title: string
    content: string
  }>({
    defaultValues: {
      username,
      title: '',
      content: '',
    },
  })

  const disabled = watch('content') === '' || watch('title') === ''

  const onSubmit: SubmitHandler<{
    username: string
    title: string
    content: string
  }> = async (newData) => {
    CreatePost(newData).then(() => {
      queryClient.invalidateQueries(['posts'])
      toast.success('Post created successfully!')
    })
  }

  useEffect(() => {
    if (!username) {
      router.replace('/?error=notAuthenticated')
    }
  }, [])

  const { status, data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['posts'],
    ({ pageParam = 0 }) => {
      return GetPosts('/careers/?limit=10&offset=' + pageParam * 10)
    },
    {
      getPreviousPageParam: (firstPage) => undefined,
      getNextPageParam: (lastPage, allPages) =>
        lastPage.next ? allPages.length : undefined,
    },
  )

  const queryClient = useQueryClient()

  const posts = data ? [].concat(...data.pages.map((page) => page.results)) : []

  const handleLoadMore = () => {
    if (hasNextPage) {
      fetchNextPage()
    }
  }

  return (
    <RootLayout>
      <MainLayout>
        <section className="space-y-6 bg-white p-6">
          <form
            className="space-y-6 rounded-[16px] border border-black-codeleap
          p-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-[22px] font-bold">What’s on your mind?</h2>
            <Input
              label={'Title'}
              placeholder={'Hello World'}
              name={'title'}
              register={register}
            />
            <TextArea
              label={'Content'}
              placeholder={'Content here'}
              name={'content'}
              register={register}
            />
            <Button variant={'primary'} className="ml-auto" disabled={disabled}>
              Create
            </Button>
          </form>
          {/* List of Posts */}
          <div className="space-y-6">
            {status !== 'success'
              ? undefined
              : posts.map((post: IPost) => (
                  <PostCard
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    author={post.username}
                    created_datetime={post.created_datetime}
                    postId={post.id!}
                  />
                ))}
          </div>
          {hasNextPage && (
            <InView
              onChange={(inView) => {
                if (inView || data !== undefined) {
                  handleLoadMore()
                }
              }}
            >
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-repeat animate-spin"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                  <path
                    fillRule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                  />
                </svg>
              </div>
            </InView>
          )}
        </section>
        <BackToTopButton />
      </MainLayout>
    </RootLayout>
  )
}
