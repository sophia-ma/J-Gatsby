import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
import { variables, matches } from '../../styles/tokens';
import './Navbar.scss';

const Navbar: React.FC = () => {
    const [click, setClick] = useState(false);
    const toggleClick = () => setClick(!click);

    const scrollToElement = require('scroll-to-element');

    const matchesXS = useMediaQuery(matches.xs);
    const matchesSM = useMediaQuery(matches.sm);

    const handleLinkClick = ({ e, target }: { e: any; target: string }) => {
        if (typeof window !== 'undefined' && target.includes('#')) {
            e?.preventDefault();

            const headerHeightXS = -parseInt(variables.headerHeightXS, 10);
            const headerHeightSM = -parseInt(variables.headerHeightSM, 10);
            const headerHeight = -parseInt(variables.headerHeight, 10);

            if (matchesXS) {
                scrollToElement(target, { offset: headerHeightXS });
            } else if (matchesSM) {
                scrollToElement(target, { offset: headerHeightSM });
            } else {
                scrollToElement(target, { offset: headerHeight });
            }
        }
    };

    return (
        <IconContext.Provider value={{ color: variables.basicColour }}>
            <Nav>
                <NavBarContainer $click={click}>
                    <MobileContainer $click={click}>
                        {click ? (
                            <FaTimes className="navbar-svg-icon" onClick={toggleClick} />
                        ) : (
                            <FaBars className="navbar-svg-icon" onClick={toggleClick} />
                        )}

                        <ul>
                            <NavLinks
                                to="#contact-form"
                                onClick={e => handleLinkClick({ e, target: '#contact-form' })}
                                $click={click}
                            >
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
                            <NavLinks
                                to="#contact-form"
                                onClick={e => handleLinkClick({ e, target: '#contact-form' })}
                            >
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </IconContext.Provider>
    );
};

export default Navbar;
