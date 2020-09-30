import React from 'react';
import { Link } from 'gatsby';

interface Props {
    children: any;
}

const IntroContainer = ({ children }: Props) => {
    return (
        <Link to="/Home">
            <section>{children}</section>
        </Link>
    );
};

export default IntroContainer;
