import RootLayout from '@/components/layouts/RootLayout'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/Input'
import TextArea from '@/components/inputs/TextArea'
import MainLayout from '@/components/layouts/MainLayout'
import { useSelector } from 'react-redux'
import PostCard from '@/components/cards/PostCard'
import { IState } from '@/redux/store'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IPost } from '@/types/postData'
import { InView } from 'react-intersection-observer'
import { GetPosts } from '@/actions/postRequests'
import useSWRInfinite from 'swr/infinite'

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
    mutate()
  }

  useEffect(() => {
    if (!username) {
      router.replace('/')
    }
  }, [])

  const [hasNextPage, setHasNextPage] = useState<boolean>(true)
  const getKey = (pageIndex: any, previousPageData: any) => {
    if (previousPageData && !previousPageData.results.length) return null
    if (pageIndex === 0) {
      return `/careers/`
    }
    return `/careers/?limit=10&offset=${pageIndex * 10}`
  }

  const { data, isLoading, mutate, size, setSize } = useSWRInfinite(
    getKey,
    async (url: string) => {
      return GetPosts(url).then((res) => {
        return res
      })
    },
  )

  const posts = data ? [].concat(...data.map((page) => page.results)) : []

  const handleLoadMore = () => {
    if (data?.[size - 1]?.next && data?.[size - 1]?.next !== '') {
      console.log(size + 1)
      setSize(size + 1)
      setHasNextPage(true)
    } else {
      setHasNextPage(false)
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
            {isLoading
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
                if (inView) {
                  handleLoadMore()
                }
              }}
            >
              <h1 className="text-center">Loading...</h1>
            </InView>
          )}
        </section>
      </MainLayout>
    </RootLayout>
  )
}
