import '@/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Flex as Roboto } from 'next/font/google'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { DeleteModalProvider } from '@/components/providers/DeleteModalProvider'
import { EditModalProvider } from '@/components/providers/EditModalProvider'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <DeleteModalProvider>
          <EditModalProvider>
            <main className={`${roboto.variable} font-roboto`}>
              <Component {...pageProps} />
              <Toaster />
            </main>
          </EditModalProvider>
        </DeleteModalProvider>
      </Provider>
    </QueryClientProvider>
  )
}
