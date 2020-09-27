import React from 'react';
import { Helmet } from 'react-helmet';
import { navigate } from 'gatsby';
import './intro-container.scss';

interface Props {
    children: any;
}

const goTo = () => {
    navigate('/about-me');
};

const IntroContainer = ({ children }: Props) => {
    return (
        <a
            href="#"
            onClick={goTo}
            style={{
                textDecoration: `none`,
                animation: `fadein 2s`,
            }}
        >
            <Helmet htmlAttributes={{ class: 'intro-page' }} />
            <section>{children}</section>
        </a>
    );
};

export default IntroContainer;
