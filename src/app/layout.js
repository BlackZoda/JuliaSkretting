import './globals.css'
import { cx } from '../utils'
import { Inter, Manrope, Spirax } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import siteMetaData from '../utils/siteMetaData'
import ThemeScript from '../components/ThemeScript'
const inter = Inter({ subsets: ['latin'], display: "swap", variable: "--font-in" })
const manrope = Manrope({ subsets: ['latin'], display: "swap", variable: "--font-mr" })
const spirax = Spirax({ subsets: ['latin'], weight: ["400"], display: "swap", variable: "--font-sx" })

export const metadata = {
    metadataBase: new URL(siteMetaData.siteUrl),
    title: {
        template: `${siteMetaData.title} | %s`,
        default: siteMetaData.title,
    },
    description: siteMetaData.description,
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
            <body className={cx(
                inter.variable,
                manrope.variable,
                spirax.variable,
                "font-mr bg-light dark:bg-dark")}>
                
                <ThemeScript />

                <Header />
                    {children}
                <Footer />
            </body>
        </html>
    )
}
