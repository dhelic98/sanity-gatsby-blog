require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Eric's page`,
  },
  plugins: [{
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [{
            name: `about.`,
            slug: `/`
          },
          {
            name: `projects.`,
            slug: `/projects`
          },
          {
            name: `writing.`,
            slug: `/writing`
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jodie - @lekoarts/gatsby-theme-jodie`,
        short_name: `jodie`,
        description: `Image-heavy photography portfolio with colorful accents & customizable pages. Includes adaptive image grids powered by CSS grid and automatic image integration into projects.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b75e09`,
        display: `standalone`,
        icons: [{
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: "a9AVY5hvsENzni2MqgnV0PN5N",
          consumer_secret: "pIL962rV3paFYgqSbKBRKz6rjpPKVqLhvFrkHAbXtvfMoOl7Th  ",
          bearer_token: "AAAAAAAAAAAAAAAAAAAAAKzyMwEAAAAAMldCD2P%2FvndV07n2YA9blz7jHV8%3DmzZYcwoVc0Cz5LuyM34hVEH0nOXChKHQRWTduwioUwKlOFhE70",
        },
        queries: {
          getTweets: {
            endpoint: "statuses/user_timeline",
            params: {
              screen_name: "pripjani",
              include_rts: false,
              exclude_replies: true,
              tweet_mode: "extended",
            },
          },
        },
      },
    },
    {
      resolve: 'gatsby-theme-pocket',
      options: {
        pocketAccessToken: '55309c2d-d6d1-b8cf-a0af-5c7e32',
        weeksOfHistory: 52,
        tagFilter: false,
        searchFilter: false,
        pageTitle: 'Articles of interest',
        pageDescription: 'This is a curated list of articles tagged under different areas of interest.',
        seoTitle: 'gatsby-theme-pocket',
        seoDescription: 'A Gatsby theme that adds your pocket app articles to your gatsby website',
        seoKeywords: ['gatsby', 'react', 'pocket', 'gatsby-theme', 'gatsby-plugin', 'articles'],
        siteUrl: 'https://www.hungrybearstudio.com/'
      }
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `eepwv2ou`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: 'skFDKS56UAg6ykNe06b64m1fn6zoDtSv4RpoZaU3Ks4upzuQJff96drgVk3oHm1850fxrWjzHTROpV5Hg',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `44130077681`,
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-twitter`,
  ],
}