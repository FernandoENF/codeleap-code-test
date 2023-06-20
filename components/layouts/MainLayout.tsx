import { FC, ReactNode, useContext } from 'react'
import {
  EditModalContext,
  EditModalProvider,
} from '@/components/providers/EditModalProvider'
import {
  DeleteModalContext,
  DeleteModalProvider,
} from '@/components/providers/DeleteModalProvider'
import EditPostModal from '@/components/modals/EditPostModal'
import DeletePostModal from '@/components/modals/DeletePostModal'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-[800px] max-w-full flex-col self-start">
      <header
        className="w-full bg-blue-codeleap px-[37px] py-[27px] text-[22px] font-bold
        text-white"
      >
        <h1>CodeLeap Network</h1>
      </header>
      {children}
      <EditPostModal />
      <DeletePostModal />
    </div>
  )
}
export default MainLayout
