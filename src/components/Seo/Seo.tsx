import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';
import { useSiteMetadata } from '../../hooks/use-site-metadata';

type Props = {
    lang?: string;
    title: string;
    description: string | null;
};

interface DataProps {
    contentfulUser: {
        name: string;
        website: string;
    };
}

const SEO: React.FC<Props> = ({ lang, title, description }) => {
    const data: DataProps = useStaticQuery(graphql`
        query {
            contentfulUser(owner: { eq: true }) {
                name
                website
            }
        }
    `);

    const { siteMetadata: defaults, buildTime } = useSiteMetadata();
    const { pathname } = useLocation();
    const { name, website } = data.contentfulUser;

    const seo = {
        title: defaults.title,
        description: description ?? defaults.description,
        url: `${website}${pathname}`,
        siteLanguage: lang ?? defaults.siteLanguage,
        author: name ?? defaults.author,
    };

    const schemaOrgWebPage = {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        url: website,
        headline: defaults.headline,
        inLanguage: seo.siteLanguage,
        mainEntityOfPage: website,
        description: seo.description,
        name: `${name} | Tattooer & Barber`,
        author: {
            '@type': 'Person',
            name: seo.author,
        },
        copyrightHolder: {
            '@type': 'Person',
            name: seo.author,
        },
        copyrightYear: `2020 - ${new Date().getFullYear()}`,
        creator: {
            '@type': 'Person',
            name: seo.author,
        },
        publisher: {
            '@type': 'Person',
            name: seo.author,
        },
        datePublished: '2019-01-18T10:30:00+01:00',
        dateModified: buildTime,
    };

    return (
        <Helmet
            htmlAttributes={{
                lang: seo.siteLanguage,
            }}
            title={title}
            titleTemplate={`%s | ${name} | Tattooer & Barber`}
        >
            <link rel="canonical" href={seo.url} />
            <meta name="description" content={seo.description} />

            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && <meta property="og:description" content={seo.description} />}
            <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>
        </Helmet>
    );
};

SEO.defaultProps = {
    lang: `en`,
};

export default SEO;
