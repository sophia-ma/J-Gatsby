import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
    MobileContainer,
    Nav,
    NavBarContainer,
    NavLinks,
    NavItem,
    NavMenu,
    Header,
    Title,
    Description,
} from './NavbarElements';
import { variables, matches } from '../../styles/tokens';
import './Navbar.scss';

interface DataProps {
    allContentfulUser: {
        nodes: [
            {
                name: string;
                instagram: string;
            },
        ];
    };
}

const Navbar: React.FC = () => {
    const [hamburgerMode, setHamburgerMode] = useState(false);
    const toggleHamburgerMode = () => setHamburgerMode(!hamburgerMode);

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

    const data: DataProps = useStaticQuery(graphql`
        query {
            allContentfulUser(filter: { owner: { eq: true } }) {
                nodes {
                    name
                    instagram
                }
            }
        }
    `);

    const { instagram, name } = data.allContentfulUser.nodes[0];
    return (
        <IconContext.Provider value={{ color: variables.primaryColour }}>
            <Nav>
                <NavBarContainer $hamburgerMode={hamburgerMode}>
                    <Header $hamburgerMode={hamburgerMode}>
                        <Title>{name}</Title>
                        <Description>Tattooer & Barber</Description>
                    </Header>

                    <MobileContainer $hamburgerMode={hamburgerMode}>
                        {hamburgerMode ? (
                            <FaTimes className="navbar-svg-icon" onClick={toggleHamburgerMode} />
                        ) : (
                            <FaBars className="navbar-svg-icon" onClick={toggleHamburgerMode} />
                        )}

                        <ul>
                            <NavLinks
                                to="#contact-form"
                                onClick={e => handleLinkClick({ e, target: '#contact-form' })}
                                $hamburgerMode={hamburgerMode}
                                style={{ padding: 0 }}
                            >
                                Contact
                            </NavLinks>
                        </ul>
                    </MobileContainer>

                    <NavMenu
                        onClick={hamburgerMode ? toggleHamburgerMode : () => {}}
                        $hamburgerMode={hamburgerMode}
                    >
                        <NavItem>
                            <NavLinks
                                to="#tattoos"
                                onClick={e => handleLinkClick({ e, target: '#tattoos' })}
                            >
                                Tattoos
                            </NavLinks>
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
                            <NavLinks to="#shop">Shop</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to={instagram}>Social Media</NavLinks>
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
