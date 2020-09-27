import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
    MobileContainer,
    Nav,
    NavBarContainer,
    NavIcon,
    NavLinks,
    NavLogo,
    NavItem,
    NavMenu,
} from './NavbarElements';
import LogoImage from 'images/logo.png';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const toggleClick = () => setClick(!click);

    return (
        <IconContext.Provider value={{ color: '#d0b88d' }}>
            <Nav click={click}>
                <NavBarContainer click={click}>
                    <MobileContainer onClick={toggleClick} click={click}>
                        {click ? <FaTimes /> : <FaBars />}

                        <NavLogo to="/" click={click}>
                            <NavIcon src={LogoImage} />
                        </NavLogo>

                        <ul>
                            <NavLinks to="/" click={click}>
                                Contact
                            </NavLinks>
                        </ul>
                    </MobileContainer>

                    <NavMenu onClick={toggleClick} click={click}>
                        <NavItem>
                            <NavLinks to="/">About me</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="/">Tattoos</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLogo to="/" click={click}>
                                <NavIcon src={LogoImage} />
                            </NavLogo>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="/">Haircuts</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="/">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </IconContext.Provider>
    );
};

export default Navbar;
