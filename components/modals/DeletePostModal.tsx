import { FC, Fragment, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button from '@/components/buttons/Button'
import { DeleteModalContext } from '@/components/providers/DeleteModalProvider'
import { useSelector } from 'react-redux'
import { IState } from '@/redux/store'
import { IPost } from '@/types/postData'
import { RemovePost } from '@/actions/postRequests'
import { useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

interface DeletePostModalProps {}

const DeletePostModal: FC<DeletePostModalProps> = () => {
  const queryClient = useQueryClient()
  const { isOpen, setIsOpen } = useContext(DeleteModalContext)

  const post = useSelector<IState, IPost>((state) => state.post)

  const handleDelete = () => {
    RemovePost(post.id!).then(() => {
      queryClient.invalidateQueries(['posts'])
      setIsOpen(false)
      toast.success('Post deleted successfully!')
    })
  }

  return (
    <Transition appear show={isOpen ?? false} as={Fragment}>
      <Dialog
        open={isOpen ?? false}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
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
            <Dialog.Panel className="mx-auto w-[660px] max-w-full space-y-10 rounded-2xl bg-white p-6">
              <Dialog.Title className="text-[22px] font-bold">
                Are you sure you want to delete this item?
              </Dialog.Title>
              <div className="flex justify-end space-x-8">
                <Button
                  variant={'secondary'}
                  type={'button'}
                  onClick={() => {
                    setIsOpen(false)
                  }}
                >
                  Cancel
                </Button>
                <Button variant={'danger'} onClick={() => handleDelete()}>
                  Delete
                </Button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
export default DeletePostModal
