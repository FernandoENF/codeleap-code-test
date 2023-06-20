import '@/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Flex as Roboto } from 'next/font/google'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { DeleteModalProvider } from '@/components/providers/DeleteModalProvider'
import { EditModalProvider } from '@/components/providers/EditModalProvider'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <DeleteModalProvider>
        <EditModalProvider>
          <main className={`${roboto.variable} font-roboto`}>
            <Component {...pageProps} />
          </main>
        </EditModalProvider>
      </DeleteModalProvider>
    </Provider>
  )
}
