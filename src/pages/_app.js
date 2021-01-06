import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import * as gtag from '../lib/gtag'
import '@fontsource/karla'
import '@fontsource/rubik'
import 'focus-visible/dist/focus-visible'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
