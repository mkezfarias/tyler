module.exports = {
  siteMetadata: {
    // edit below
    title: `Tyler's been writing`, // this is the blog page title
    author: `Tyler Vawser`, // do not change
    description: `Tyler Vawser`, // update meta description
    siteUrl: `https://tylervawser.com/`, // updated url
    social: {
      twitter: `tvaw`, // update twitter handle
    },
  },

  //don't change these configs please
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-dark-mode`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-next-seo`,

    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://tylervawser.us6.list-manage.com/subscribe/post?u=513792e6ef8ce4bcfd28960e1&amp;id=ef17e21e21",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        trackingId: `UA-38989531-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // edit below
        icon: `static/favicon.ico`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Work Sans\:300,400,400i,500,600,700`,
          `Roboto\:300,400,400i,500,600,700`,
        ],
        display: "swap",
      },
    },
  ],
}
