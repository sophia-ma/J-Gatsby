import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import './Footer.scss';

interface DataProps {
    allContentfulUser: {
        nodes: [
            {
                name: string;
                owner: boolean;
                developer: boolean;
                instagram: string;
            },
        ];
    };
}

const Footer: React.FC = () => {
    const data: DataProps = useStaticQuery(graphql`
        {
            allContentfulUser {
                nodes {
                    name
                    owner
                    developer
                    instagram
                }
            }
        }
    `);
    const owner = data.allContentfulUser.nodes.find(x => x.owner);
    const developer = data.allContentfulUser.nodes.find(x => x.developer);

    return (
        <div className="footer-container">
            <span className="left-group">
                Copyright © {new Date().getFullYear()} {owner?.name}. &nbsp;
                <Link to={owner?.instagram || ''}>
                    <FaInstagram className="instagram-icon" />
                </Link>
            </span>
            <span>Developed by {developer?.name}</span>
        </div>
    );
};

export default Footer;
