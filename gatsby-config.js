module.exports = {
  siteMetadata: {
    title: `Chris Beggs Portfolio`,
    description: `Learn a little about a CS/Math Student in Boulder!`,
    author: `@clbeggs`,
    siteUrl: 'https://chris-beggs.netlify.com/',
    image: './src/images/MeUnchanged.JPG',
    
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-web-font-loader`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options:{
        host:'https://chris-beggs.netlify.com/',
        policy:[{ userAgent: '*', allow: '/' }]
      }
    },

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
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lora',]
        }
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
        
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
