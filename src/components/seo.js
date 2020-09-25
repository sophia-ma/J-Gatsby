import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function SEO({ lang, title }) {
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | Julian Memai`}
        />
    );
}

SEO.defaultProps = {
    lang: `en`,
};

SEO.propTypes = {
    lang: PropTypes.string,
    title: PropTypes.string.isRequired,
};

export default SEO;
