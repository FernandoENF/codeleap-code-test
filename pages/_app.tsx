import '@/globals.css'
import type { AppProps } from 'next/app'

import { Roboto_Flex as Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${roboto.variable} min-w-screen min-h-screen font-roboto`}
    >
      <Component {...pageProps} />
    </main>
  )
}
