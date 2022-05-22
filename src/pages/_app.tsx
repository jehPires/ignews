import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Provider as NextAuthProvider} from 'next-auth/react'

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) { //toda vez que o user troca de pág, o app é recarregado
  return (
    <NextAuthProvider session={pageProps.session}>
    <Header/>
  <Component {...pageProps} />
  </NextAuthProvider>
  )
}

export default MyApp
