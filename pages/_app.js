import "../css/index.css";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const og = pageProps.data?.og
  const title = pageProps.data?.title

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta property="og:title" content={title || `DIFTK`} />
        <meta property="og:site_name" content="DIFTK" />
        <meta property="og:description" content={og ? og.description : `Do it for the kids`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@doit4thekidz_" />
        <meta property="og:image" content={og ? og.image : `http://doit4thekidz.org/wp-content/uploads/2020/01/logo-png-file-200x200.png`} />
        {/* This is the favicon */}
        <link rel="shortcut icon" href="/tailwind-logo.svg" />
        <title>{title || `DIFTK`}</title>
      </Head>

      <Component {...pageProps} />
    </>
    )
}

export default MyApp;
