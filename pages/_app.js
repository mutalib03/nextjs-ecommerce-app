
import { StoreContextProvider } from '../store/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return  (
  <StoreContextProvider>
<Component {...pageProps}/>
</StoreContextProvider>

  )
}

export default MyApp
