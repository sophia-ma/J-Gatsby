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
import { variables } from '../../styles/tokens';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const toggleClick = () => setClick(!click);

    const scrollToElement = require('scroll-to-element');

    const handleLinkClick = ({ e, target }: { e: any; target: string }) => {
        if (typeof window !== 'undefined' && target.includes('#')) {
            e?.preventDefault();

            scrollToElement(target, { offset: -190 });
        }
    };

    return (
        <IconContext.Provider value={{ color: variables.basicColour }}>
            <Nav>
                <NavBarContainer $click={click}>
                    <MobileContainer onClick={toggleClick} $click={click}>
                        {click ? <FaTimes /> : <FaBars />}

                        <NavLogo to="/" $click={click}>
                            <NavIcon src={LogoImage} />
                        </NavLogo>

                        <ul>
                            <NavLinks to="/" $click={click}>
                                Contact
                            </NavLinks>
                        </ul>
                    </MobileContainer>

                    <NavMenu onClick={click ? toggleClick : () => {}} $click={click}>
                        <NavItem>
                            <NavLinks
                                to="#about-me"
                                onClick={e => handleLinkClick({ e, target: '#about-me' })}
                            >
                                About me
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks
                                to="#tattoos"
                                onClick={e => handleLinkClick({ e, target: '#tattoos' })}
                            >
                                Tattoos
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLogo to="/" $click={click}>
                                <NavIcon src={LogoImage} />
                            </NavLogo>
                        </NavItem>

                        <NavItem>
                            <NavLinks
                                to="#haircuts"
                                onClick={e => handleLinkClick({ e, target: '#haircuts' })}
                            >
                                Haircuts
                            </NavLinks>
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
