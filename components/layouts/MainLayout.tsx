import { FC, ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

const RootLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-[800px] max-w-full flex-col self-start">
      <header
        className="w-full bg-blue-codeleap px-[37px] py-[27px] text-[22px] font-bold
        text-white"
      >
        <h1>CodeLeap Network</h1>
      </header>
      {children}
    </div>
  )
}
export default RootLayout
