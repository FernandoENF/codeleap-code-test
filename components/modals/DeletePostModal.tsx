import { FC, ReactNode, useContext, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import Button from '@/components/buttons/Button'
import { EditModalContext } from '@/components/providers/EditModalProvider'
import { DeleteModalContext } from '@/components/providers/DeleteModalProvider'
import { useSelector } from 'react-redux'
import { IState } from '@/redux/store'
import { IPost } from '@/types/postData'

interface DeletePostModalProps {}

const DeletePostModal: FC<DeletePostModalProps> = () => {
  const { isOpen, setIsOpen } = useContext(DeleteModalContext)

  const post = useSelector<IState, IPost>((state) => state.post)

  return (
    <Dialog
      open={isOpen ?? false}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div
        className="fixed inset-0 bg-light-black-codeleap opacity-80"
        aria-hidden="true"
      />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto w-[660px] max-w-full space-y-10 rounded-2xl bg-white p-6">
          <Dialog.Title className="text-[22px] font-bold">
            Are you sure you want to delete this item?
          </Dialog.Title>
          <div className="flex justify-end space-x-8">
            <Button
              variant={'secondary'}
              onClick={() => {
                setIsOpen(false)
              }}
            >
              Cancel
            </Button>
            <Button variant={'danger'}>Delete</Button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
export default DeletePostModal
