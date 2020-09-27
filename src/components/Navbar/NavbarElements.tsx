import { Link } from 'gatsby';
import styled from 'styled-components';

declare module 'react' {
    interface HTMLAttributes<T> {
        click?: any;
    }
}

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    height: 190px;
    font-size: 1rem;
    background: #1a2b2c;
    z-index: 999;
    user-select: none;
    text-transform: uppercase;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 190px;
    z-index: 1;

    @media screen and (max-width: 960px) {
        padding: ${({ click }) => (click ? '0 70px;' : '0')};
    }
`;

export const MobileContainer = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: flex;
        align-items: center;
        justify-content: ${({ click }) => (click ? 'flex-start' : 'space-around')};
        width: 100%;
        font-size: 28px;
        cursor: pointer;
        z-index: 100;
    }
`;

export const NavLogo = styled(Link)`
    display: ${({ click }) => (click ? 'none' : 'flex')};
    align-items: center;
    justify-self: center;
    cursor: pointer;
    text-decoration: none;
`;

export const NavIcon = styled.img`
    height: 160px;
    margin: 50px;
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: ${({ click }) => (click ? '100%' : '-1000px')};
        left: 0;
        opacity: 1;
        background: #1a2b2c;
    }
`;

export const NavItem = styled.li`
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export const NavLinks = styled(Link)`
    display: flex;
    align-items: center;
    color: #d0b88d;
    font-size: 1rem;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    &:hover {
        color: #fff;
        transition: all 0.3s ease;
    }

    @media screen and (max-width: 960px) {
        display: ${({ click }) => (click ? 'none' : 'table')};
        text-align: center;
        width: 100%;
        padding: 2rem 0;
    }
`;
