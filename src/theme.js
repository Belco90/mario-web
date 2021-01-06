import { extendTheme } from '@chakra-ui/react'

const primaryColor = {
  50: '#ffefdb',
  100: '#ffd5ae',
  200: '#ffbb7e',
  300: '#ff9f4c',
  400: '#ff841a',
  500: '#e66b00',
  600: '#b45300',
  700: '#813a00',
  800: '#4f2300',
  900: '#200900',
}

export default extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'light',
  },
  colors: {
    primary: primaryColor,
  },
  fonts: {
    heading: 'Open Sans, sans-serif;',
  },
  styles: {
    global: {
      'html, body, #__next': { height: '100%' },
    },
  },
})
