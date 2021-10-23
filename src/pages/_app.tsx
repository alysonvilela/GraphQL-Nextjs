import GlobalStyle from 'styles/global'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Finances</title>
        <link rel="shortcut icon" href="/img/img-512.png" />
        <link rel="apple-touch-icon" href="/img/img-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A free app for personal finance managements"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
