import { FC, Fragment, useContext, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
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
    <Transition appear show={isOpen ?? false} as={Fragment}>
      <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-80"
          leave="ease-in duration-200"
          leaveFrom="opacity-80"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-light-black-codeleap opacity-80"
            aria-hidden="true"
          />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
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
                    type={'button'}
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
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
export default EditPostModal
