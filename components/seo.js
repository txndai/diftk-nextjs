import Head from 'next/head'

const seo = ({title, description, image, }) => {
    return (
        <Head>
        <meta property="og:title" content={title || `DIFTK`} />
        <meta property="og:description" content={description ? description : `Do it for the kids`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={image ? image : "/logo.png"} />
        <title>{`DIFTK - ${title}` || `DIFTK`}</title>
      </Head>
    )
}
export default seo;
