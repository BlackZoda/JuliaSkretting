const siteMetaData = require("./src/utils/siteMetaData");

module.exports = {
  siteUrl: process.env.SITE_URL || siteMetaData.siteUrl, 
  generateRobotsTxt: true, // (optional)
  // ...other options
}
