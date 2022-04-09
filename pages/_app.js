import Head from 'next/head';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="../assets/Inter/Inter-Regular.ttf"
          rel="stylesheet"
        />
        <link
          href="../assets/Inter/Inter-Medium.ttf"
          rel="stylesheet"
        />
        <link
          href="../assets/Inter/Inter-SemiBold.ttf"
          rel="stylesheet"
        />
        <link
          href="../assets/Inter/Inter-ExtraBold.ttf"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
