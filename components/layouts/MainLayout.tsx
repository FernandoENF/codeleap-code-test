import { FC, ReactNode, useCallback } from 'react'
import EditPostModal from '@/components/modals/EditPostModal'
import DeletePostModal from '@/components/modals/DeletePostModal'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '@/redux/store'
import { removeUsername } from '@/actions/userActions'
import { useRouter } from 'next/router'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const username = useSelector<IState, string>((state) => state.user.username)

  const handleLogout = useCallback(() => {
    router.push('/').then(() => {
      dispatch(removeUsername())
    })
  }, [dispatch, router])

  return (
    <div className="relative flex w-[800px] max-w-full flex-col self-start">
      <header
        className="sticky top-0 flex w-full flex-wrap items-center justify-between
        gap-x-2 bg-blue-codeleap px-[37px] py-[27px] text-[22px] font-bold text-white"
      >
        <h1>CodeLeap Network</h1>
        <div className="flex items-center gap-x-2 text-lg font-medium">
          <span>Hello, {username}</span>
          <button
            className="block rounded-lg bg-red-codeleap p-2 text-white hover:bg-red-700"
            onClick={handleLogout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-box-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
              />
              <path
                fillRule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
              />
            </svg>
          </button>
        </div>
      </header>
      {children}
      <EditPostModal />
      <DeletePostModal />
    </div>
  )
}
export default MainLayout
