import React from 'react';
import LogoImage from 'images/logo.png';
import './Logo.scss';

const Logo: React.FC = () => {
    return <img src={LogoImage} alt="Logo" className="logo" />;
};

export default Logo;
