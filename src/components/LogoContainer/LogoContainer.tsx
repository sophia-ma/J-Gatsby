import React from 'react';
import './LogoContainer.scss';

interface Props {
    children: any;
}

const LogoContainer = ({ children }: Props) => {
    return (
        <div className="logo-container">
            <section>{children}</section>
        </div>
    );
};

export default LogoContainer;
