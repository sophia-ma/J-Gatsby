import React from 'react';
import { navigate } from 'gatsby';

interface Props {
    children: any;
}

const goTo = () => {
    navigate('/AboutMe');
};

const IntroContainer = ({ children }: Props) => {
    return (
        <a href="#" onClick={goTo} style={{ textDecoration: `none` }}>
            <section>{children}</section>
        </a>
    );
};

export default IntroContainer;
