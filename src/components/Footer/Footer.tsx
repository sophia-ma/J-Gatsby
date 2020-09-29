import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { variables } from '../../styles/tokens';

interface DataProps {
    contentfulUser: {
        name: string;
    };
}

const FooterContainer = styled.footer`
    display: flex;
    background: ${variables.backgroundColour};
    color: #d0b88d;
    position: absolute;
    width: 100%;
    height: 80px;
    z-index: 999;
    user-select: none;
`;

const Copyright = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
`;

const Footer = () => {
    const data: DataProps = useStaticQuery(graphql`
        {
            contentfulUser(owner: { eq: true }) {
                name
            }
        }
    `);

    return (
        <FooterContainer>
            <Copyright>
                Copyright © {new Date().getFullYear()} {data.contentfulUser.name}.{' '}
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;
