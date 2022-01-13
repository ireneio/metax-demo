import { CssBaseline } from '@mui/material'
import '../modules/common/styles/index.css'
import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../store'
import { ThemeProvider } from '@mui/system'
import theme from '../modules/common/styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <div data-cid='App'>
          <CssBaseline />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default App
