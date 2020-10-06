import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

type Props = {
    lang?: string;
    title: string;
};

interface DataProps {
    contentfulUser: {
        name: string;
    };
}

const SEO: React.FC<Props> = ({ lang, title }) => {
    const data: DataProps = useStaticQuery(graphql`
        query {
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
