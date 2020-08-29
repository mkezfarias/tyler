module.exports = {
  siteMetadata: {
    // edit below
    title: `Tyler’s latest posts:`, // this is the blog page title
    author: `Gatsby`, // do not change
    description: `meta description`, // update meta description
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`, // updated url
    social: {
      twitter: `gatsbyjs`, // update twitter handle
    },
  },

  //don't change these configs please
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-next-seo`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://remotesynthesis.us6.list-manage.com/subscribe/post?u=231f8aff82a1f82e4d6ab23d8&amp;id=d00ad8719a",
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
        // trackingId: `ADD YOUR TRACKING ID HERE`,
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
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
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
