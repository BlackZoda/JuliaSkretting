const siteMetaData = require("./src/utils/siteMetaData");

module.exports = {
  siteUrl: process.env.SITE_URL || siteMetaData.siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'], // Utelat sider du ikke vil ha i sitemapet
}
