import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from '@mui/system'
import { CacheProvider, EmotionCache } from '@emotion/react'
import store from '../store'
import theme from '../modules/common/styles/theme'
import '../modules/common/styles/index.css'
import createEmotionCache from '../createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

interface AppPropsExtended extends AppProps {
  emotionCache: EmotionCache
}

function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsExtended) {
  return (
    <CacheProvider value={emotionCache}>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <div data-cid='App'>
            <CssBaseline />
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </ReduxProvider>
    </CacheProvider>

  )
}

export default App
