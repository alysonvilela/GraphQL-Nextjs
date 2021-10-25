import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/global'
import { tokens } from 'styles/tokens/tokenValues'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Finances</title>
        <link rel="shortcut icon" href="/img/img-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A free app for personal finance managements"
        />
      </Head>
      <ThemeProvider theme={tokens}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
