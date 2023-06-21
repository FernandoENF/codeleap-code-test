import { FC, ReactNode } from 'react'
import EditPostModal from '@/components/modals/EditPostModal'
import DeletePostModal from '@/components/modals/DeletePostModal'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-[800px] max-w-full flex-col self-start">
      <header
        className="sticky top-0 w-full bg-blue-codeleap px-[37px] py-[27px] text-[22px]
        font-bold text-white"
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
