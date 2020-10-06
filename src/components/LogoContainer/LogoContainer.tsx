import React from 'react';
import './LogoContainer.scss';

type Props = {
    children: any;
};

const LogoContainer: React.FC<Props> = ({ children }) => {
    return (
        <div className="logo-container">
            <section>{children}</section>
        </div>
    );
};

export default LogoContainer;
