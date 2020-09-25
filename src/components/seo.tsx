import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
    description?: string;
    lang?: string;
    meta?: [];
    title: string;
}

const SEO = ({ lang, title }: Props) => {
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | Julian Memai`}
        />
    );
};

SEO.defaultProps = {
    lang: `en`,
};

export default SEO;
