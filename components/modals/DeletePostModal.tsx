import { FC, ReactNode } from 'react'
import { Dialog } from '@headlessui/react'
import Button from '@/components/buttons/Button'

interface DeletePostModalProps {
  isOpen: boolean
  setIsOpen: Function
}

const DeletePostModal: FC<DeletePostModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog
      open={isOpen}
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
            <Button variant={'secondary'}>Cancel</Button>
            <Button variant={'danger'}>Delete</Button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
export default DeletePostModal