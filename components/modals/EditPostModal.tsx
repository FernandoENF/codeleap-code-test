import { FC, useContext, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/Input'
import TextArea from '@/components/inputs/TextArea'
import { EditModalContext } from '@/components/providers/EditModalProvider'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { IState } from '@/redux/store'
import { IPost } from '@/types/postData'
import { EditPost } from '@/actions/postRequests'
import { useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

interface EditPostModalProps {}

const EditPostModal: FC<EditPostModalProps> = () => {
  const queryClient = useQueryClient()
  const { isOpen, setIsOpen } = useContext(EditModalContext)

  const { register, reset, handleSubmit } = useForm<{
    id: number
    title: string
    content: string
  }>({
    defaultValues: {
      id: undefined,
      title: '',
      content: '',
    },
  })

  const post = useSelector<IState, IPost>((state) => state.post)

  useEffect(() => {
    reset({
      id: post.id,
      title: post.title,
      content: post.content,
    })
  }, [post, reset])

  const onSubmit: SubmitHandler<{
    id: number
    title: string
    content: string
  }> = async (newData) => {
    EditPost(newData).then(() => {
      queryClient.invalidateQueries(['posts'])
      setIsOpen(false)
      toast.success('Post edited successfully!')
    })
  }

  return (
    <Dialog
      open={isOpen ?? false}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div
        className="fixed inset-0 bg-light-black-codeleap opacity-80"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto w-[660px] max-w-full space-y-6 rounded-2xl bg-white p-6">
          <Dialog.Title className="text-[22px] font-bold">
            Edit item
          </Dialog.Title>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label={'Title'}
              placeholder={'Hello world'}
              register={register}
              name={'title'}
            />
            <TextArea
              label={'Content'}
              placeholder={'Content here'}
              register={register}
              name={'content'}
            />
            <div className="flex flex-wrap justify-end gap-x-8">
              <Button
                variant={'secondary'}
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                Cancel
              </Button>
              <Button variant={'success'} type="submit">
                Save
              </Button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
export default EditPostModal
