import React from 'react';
import { Helmet } from 'react-helmet';
import { navigate } from 'gatsby';
import './logo-container.scss';

interface Props {
    children: any;
}

const goTo = () => {
    navigate('/about-me');
};

const LogoContainer = ({ children }: Props) => {
    return (
        <a
            href="#"
            onClick={goTo}
            style={{
                textDecoration: `none`,
            }}
        >
            <Helmet htmlAttributes={{ class: 'intro-page' }} />
            <section>{children}</section>
        </a>
    );
};

export default LogoContainer;
