import { FC, ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-codeleap">
      {children}
    </div>
  )
}
export default RootLayout
