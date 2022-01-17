module.exports = {
    siteMetadata: {
        title: "My First Gatsby Site",
        siteUrl: `https://www.test.yaakovbressler.com`,
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
      }
    ]
}
