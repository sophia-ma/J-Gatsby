import { Link } from 'gatsby';
import styled from 'styled-components';
import { variables, breakpoints } from '../../styles/tokens';

declare module 'react' {
    interface HTMLAttributes<T> {
        $click?: boolean;
    }
}

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    height: ${variables.headerHeight};
    background: ${variables.backgroundColour};
    z-index: 999;
    user-select: none;
    text-transform: uppercase;
    transition: 0.8s all ease;


    @media screen and (max-width: ${breakpoints.sm}) {
        height: ${variables.headerHeightSM};
    }

    @media screen and (max-width: ${breakpoints.xs}) {
        height: ${variables.headerHeightXS};
    }
`;

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 190px;
    z-index: 1;

    @media screen and (max-width: ${breakpoints.md}) {
        margin: ${({ $click }) => ($click ? '0 40px;' : '0')};
    }

    @media screen and (max-width: ${breakpoints.sm}) {
        height: 130px;
    }

    @media screen and (max-width: ${breakpoints.xs}) {
        height: 110px;
    }
`;

export const MobileContainer = styled.div`
    display: none;

    @media screen and (max-width: ${breakpoints.sm}) {
        display: flex;
        align-items: center;
        justify-content: ${({ $click }) => ($click ? 'flex-start' : 'space-between')};
        width: 100%;
        font-size: 1.7rem;
        cursor: pointer;
        z-index: 100;
        margin: ${({ $click }) => ($click ? 0 : '0 40px')};
    }


    @media screen and (max-width: ${breakpoints.xs}) {
        font-size: 1.5rem;
    }
`;

export const NavLogo = styled(Link)`
    display: ${({ $click }) => ($click ? 'none' : 'flex')};
    align-items: center;
    justify-self: center;
    cursor: pointer;
    text-decoration: none;
`;

export const NavIcon = styled.img`
    height: 160px;
    margin: 50px;

    @media screen and (max-width: ${breakpoints.sm}) {
        height: 100px;
    }

    @media screen and (max-width: ${breakpoints.xs}) {
        height: 80px;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: ${breakpoints.sm}) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${({ $click }) => ($click ? '100vh' : 'inherit')};
        position: absolute;
        top: ${({ $click }) => ($click ? '100%' : '-1000px')};
        left: 0;
        opacity: 1;
        background: ${variables.backgroundColour};
    }
`;

export const NavItem = styled.li`
    @media screen and (max-width: ${breakpoints.sm}) {
        width: 100%;
    }
`;

export const NavLinks = styled(Link)`
    display: flex;
    align-items: center;
    color: ${variables.basicColour};
    font-size: 1.2rem;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    letter-spacing: 1.5px;

    &:hover {
        color: #fff;
        transition: all 0.3s ease;
    }

    @media screen and (max-width: ${breakpoints.lg}) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: ${breakpoints.md}) {
        font-size: 1rem;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
        display: ${({ $click }) => ($click ? 'none' : 'table')};
        text-align: center;
        width: 100%;
        padding: 1.8rem 0;
        font-size: 0.9rem;
    }

    @media screen and (max-width: ${breakpoints.xs}) {
        font-size: 0.8rem;
    }
`;
