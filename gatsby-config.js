module.exports = {
  siteMetadata: {
    title: `My Super Blog`,
    description: `Gatsby blog with Strapi`,
    author: `@gatsbyjs & @strapi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://gatsby-strapi.herokuapp.com"
          : "http://localhost:1337",
        contentTypes: [`article`, `user`],
        queryLimit: 1000,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
