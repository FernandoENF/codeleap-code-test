import { FC, ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="min-w-screen flex min-h-screen items-center justify-center bg-gray-codeleap">
      {children}
    </div>
  )
}
export default RootLayout
