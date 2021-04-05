import '../styles/globals.css'
import { TokenProvider } from '../Contexts/TokenContext'

function MyApp({ Component, pageProps }) {
  return (
    <TokenProvider>
      <Component {...pageProps} />
    </TokenProvider>
  )
}

export default MyApp
