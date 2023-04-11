import '@/styles/globals.css'
import { MainProvider } from '@/context/main.context'

export default function App({ Component, pageProps }) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
)}
