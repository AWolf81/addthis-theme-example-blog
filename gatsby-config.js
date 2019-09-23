const assert = require('assert')
require('dotenv').config()

assert(process.env.ADDTHIS_PUBLIC_ID, "Please add ADDTHIS_PUBLIC_ID to .env so AddThis Share will work");

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    { 
      resolve: `@awolf81/gatsby-theme-addthis`, 
      options: {
        publicId: process.env.ADDTHIS_PUBLIC_ID
      } 
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `My Blog Title`,
    author: `My Name`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
