import './globals.css'
import { cx } from '../utils'
import Header from '../components/Header'
import Footer from '../components/Footer'
import siteMetaData from '../utils/siteMetaData'
import ThemeScript from '../components/ThemeScript'

export const metadata = {
    metadataBase: new URL(siteMetaData.siteUrl),
    title: {
        template: `${siteMetaData.title} | %s`,
        default: siteMetaData.title,
    },
    description: siteMetaData.description,
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/JSSquare.svg', type: 'image/svg+xml' },
        ],
        apple: [
            { url: '/apple-icon.png' },
        ],
    },
    openGraph: {
        title: siteMetaData.title,
        description: siteMetaData.description,
        url: siteMetaData.siteUrl,
        siteName: siteMetaData.title,
        images: [
            siteMetaData.socialBanner,
        ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
        twitter: {
            card: 'summary_large_image',
            title: siteMetaData.title,
            images: [siteMetaData.socialBanner],
        },
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
              <link rel="stylesheet" href="https://use.typekit.net/eyx2awz.css" />
            </head>
            <body className="font-ibm font-pd font-sg bg-light dark:bg-dark">
                
                <ThemeScript />

                <Header />
                    {children}
                <Footer />
            </body>
        </html>
    )
}
