import React from 'react';
import { LogoContainer, Logo, SEO } from '../components';

const IndexPage: React.FC = () => (
// const IndexPage = () => (
    <LogoContainer>
        <SEO title="Intro" />
        <div className="logo-container">
            <Logo />
            <h1
                style={{
                    color: `white`,
                }}
            >
                {/* need typography  */}
                ... Please take a seat!!
            </h1>
        </div>
    </LogoContainer>
);

export default IndexPage;
