let env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `./.env.${env}` });

const website = require('./config/website.ts');
const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix;

module.exports = {
    pathPrefix: website.pathPrefix,
    siteMetadata: {
        pathPrefix,
        title: website.title,
        titleAlt: website.titleAlt,
        description: website.description,
        banner: website.logo,
        headline: website.headline,
        siteLanguage: website.siteLanguage,
        author: website.author,
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
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
                allExtensions: true,
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
                icon: `src/images/logo.png`,
            },
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                data: `@import "${__dirname}/src/styles/styles";`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
                accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
                downloadLocal: true,
            },
        },
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true,
                },
            },
        },
        `gatsby-plugin-styled-components`,
    ],
};
