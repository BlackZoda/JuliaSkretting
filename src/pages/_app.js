import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preload" href="/_next/static/css/acdaad1d23646914.css" as="style" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp; 