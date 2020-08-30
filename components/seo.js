import Head from 'next/head'

const seo = ({title, description, image, article, url}) => {

    return (
        <Head>
        <title>{`DIFTK - ${title}` || `DIFTK`}</title>
        <meta property="og:title" content={title || `DIFTK`} />
        <meta property="og:description" content={description ? description : `Do it for the kids`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={image ? image : "/logo.png"} />
        {(article ? true : null) && <meta property="og:type" content="article" />}
        {(url ? true : null) && <meta property="og:url" content={url} />}
        {(url ? true : null) && <link rel="canonical" href={url} />}
      </Head>
    )
}
export default seo;
