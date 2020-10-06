import React from 'react';
import { Link } from 'gatsby';

type Props = {
    children: any;
};

const IntroContainer: React.FC<Props> = ({ children }) => {
    return (
        <Link to="/Home">
            <section>{children}</section>
        </Link>
    );
};

export default IntroContainer;
