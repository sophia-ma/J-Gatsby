import { Link } from 'gatsby';
import styled from 'styled-components';
import { variables, breakpoints } from '../../styles/tokens';

declare module 'react' {
    interface HTMLAttributes<T> {
        $hamburgerMode?: boolean;
    }
}

export const Header = styled.header`
    text-align: center;
    text-transform: uppercase;
`;

export const Title = styled.div`
    font-size: 47px;

    @media screen and (max-width: ${breakpoints.md}) {
        font-size: 42px;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
        font-size: 19px;
    }
`;

export const Description = styled.div`
    font-size: 40px;
    margin: 10px 0px 20px;

    @media screen and (max-width: ${breakpoints.md}) {
        font-size: 35px;
        margin: 8px 0px 16px;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
        font-size: 11px;
        margin: 6px 0px 13px;
    }
`;

export const Nav = styled.nav`
    background: ${variables.backgroundColour};
    position: sticky;
    top: 0;
    height: ${variables.headerHeight};
    z-index: 999;
    user-select: none;
    text-transform: uppercase;
    transition: 0.8s all ease;

    @media screen and (max-width: ${breakpoints.sm}) {
        position: relative;
        height: ${variables.headerHeightSM};
    }

    @media screen and (max-width: ${breakpoints.xs}) {
        height: ${variables.headerHeightXS};
    }
`;

export const NavBarContainer = styled.div`
    width: 100%;
    z-index: 1;
    background: ${variables.backgroundColour};

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
        justify-content: ${({ $hamburgerMode }) =>
            $hamburgerMode ? 'flex-start' : 'space-between'};
        width: 100%;
        font-size: 1.7rem;
        cursor: pointer;
        z-index: 100;
    }

    @media screen and (max-width: ${breakpoints.xs}) {
        font-size: 1.5rem;
    }
`;

export const NavMenu = styled.ul`
    background: ${variables.backgroundColour};
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    justify-content: center;

    @media screen and (min-width: ${breakpoints.sm}) {
        border-bottom: 1px solid ${variables.secondaryColour};
        border-top: 1px solid ${variables.secondaryColour};
        padding: 20px 0px;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${({ $hamburgerMode }) => ($hamburgerMode ? '100vh' : 'inherit')};
        position: absolute;
        top: ${({ $hamburgerMode }) => ($hamburgerMode ? '100%' : '-1000px')};
        left: 0;
        opacity: 1;
        justify-content: flex-start;
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
    color: ${variables.primaryColour};
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    letter-spacing: 1.5px;

    &:hover {
        color: ${variables.secondaryColour};
        transition: all 0.3s ease;
    }

    @media screen and (max-width: ${breakpoints.md}) {
        font-size: 14px;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
        display: ${({ $hamburgerMode }) => ($hamburgerMode ? 'none' : 'table')};
        text-align: center;
        width: 100%;
        padding: 28px;
        font-size: 13px;
    }
`;
