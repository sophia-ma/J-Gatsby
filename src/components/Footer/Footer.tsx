import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import './Footer.scss';

interface DataProps {
    allContentfulUser: {
        nodes: [
            {
                name: string;
                owner: boolean;
                developer: boolean;
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
                }
            }
        }
    `);
    const owner = data.allContentfulUser.nodes.find(x => x.owner);
    const developer = data.allContentfulUser.nodes.find(x => x.developer);

    return (
        <div className="footer-container">
            <span>
                Copyright © 2020 - {new Date().getFullYear()} {owner?.name}. All Rights Reserved.
            </span>

            <span>Developed by {developer?.name}</span>
        </div>
    );
};

export default Footer;
