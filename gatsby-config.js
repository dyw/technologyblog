module.exports = {
    siteMetadata: {
      title: `Dingyw's Blog`,
      description: `Front Technical Blog - Dingyw`,
      author: `Dingyw`,
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/md`,
          name: `pages`,
        }
      },
      `gatsby-transformer-remark`,
      `gatsby-plugin-emotion`,
    ]
}