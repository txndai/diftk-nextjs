import "../css/index.css";
import "../css/scrollbar.css";
import Head from 'next/head'
import GoogleFonts from "next-google-fonts";


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
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@600;700&display=swap" />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Overlock:wght@700;900&display=swap" />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&display=swap" />
      <Component {...pageProps} />
    </>
    )
}

export default MyApp;
