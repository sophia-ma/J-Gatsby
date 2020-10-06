import React from 'react';
import styled from 'styled-components';
import LogoImage from 'images/logo.png';
import './Logo.scss';

const LogoContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    user-select: none;
`;

const Logo: React.FC = () => {
    return (
        <LogoContainer>
            <img src={LogoImage} alt="Logo" className="logo" />
        </LogoContainer>
    );
};

export default Logo;
