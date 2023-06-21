import { FC, ReactNode } from 'react'
import Head from 'next/head'

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>CodeLeap network</title>
      </Head>
      <div className="min-w-screen flex min-h-screen items-center justify-center bg-gray-codeleap">
        {children}
      </div>
    </>
  )
}
export default RootLayout
