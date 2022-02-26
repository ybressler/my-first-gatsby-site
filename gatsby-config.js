// Load environment variables
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// Loads required modules
module.exports = {
    siteMetadata: {
        title: "My First Gatsby Site",
        siteUrl: `https://www.test.yaakovbressler.com`,
        menuLinks:[
          {
            name:'Home',
            link:'/'
          },
          {
            name:'About',
            link:'/about'
          },
          {
            name:'Blog',
            link:'/blog'
          }
        ]
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        }
      },
      "gatsby-plugin-mdx",
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            `gatsby-remark-autolink-headers`,
            `gatsby-remark-prismjs`,
          ],
        },
      },
      "gatsby-transformer-sharp",
      {
        resolve: "gatsby-plugin-web-font-loader",
      }
    ]
}
