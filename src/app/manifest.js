import siteMetaData from "../utils/siteMetaData";

export default function manifest() {
  return {
    name: siteMetaData.title,
    short_name: siteMetaData.title,
    description: siteMetaData.description,
    start_url: '/',
    display: 'standalone',
    // background_color: '#fff',
    // theme_color: '#fff',
    icons: [
      {
        src: '/JSSquare.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
