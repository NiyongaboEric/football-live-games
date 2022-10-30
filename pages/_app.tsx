import type { AppProps } from 'next/app'
import { FootballProvider } from '../Context/FootballProvider'
import '../styles/globals.css';

function MyApp({ Component, pageProps}: AppProps)  {

  return (
    <FootballProvider>
      <Component {...pageProps} />
    </FootballProvider>
  )
}

export default MyApp
