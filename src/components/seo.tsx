import React from 'react';
import { Helmet } from 'react-helmet';
import { PageProps, graphql, useStaticQuery } from 'gatsby';

interface Props {
    description?: string;
    lang?: string;
    meta?: [];
    title: string;
}

interface DataProps {
    contentfulUser: {
        name: string;
    };
}

const SEO = ({ lang, title }: Props) => {
    const data: DataProps = useStaticQuery(graphql`
        query MyQuery {
            contentfulUser(owner: { eq: true }) {
                name
            }
        }
    `);

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.contentfulUser.name}`}
        />
    );
};

SEO.defaultProps = {
    lang: `en`,
};

export default SEO;
