import "../css/index.css";
import "../css/scrollbar.css";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const og = pageProps.data?.og
  const title = pageProps.data?.title

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta property="og:site_name" content="DIFTK" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@doit4thekidz_" />
        {/* This is the favicon */}
        <link rel="shortcut icon" href="/tailwind-logo.svg" />
      </Head>

      <Component {...pageProps} />
    </>
    )
}

export default MyApp;
