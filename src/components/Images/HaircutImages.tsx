import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Divider from 'images/divider.png';
import './Images.scss';

interface DataProps {
    allContentfulAsset: {
        edges: [
            node: {
                title: string;
                fluid: {
                    base64: string;
                    tracedSVG: string;
                    srcWebp: string;
                    srcSetWebp: string;
                };
            },
        ];
    };
}

const HaircutImages: React.FC = () => {
    const data: DataProps = useStaticQuery(graphql`
        query {
            allContentfulAsset(filter: { file: { fileName: { regex: "/barber/" } } }) {
                edges {
                    node {
                        fluid(maxHeight: 700, maxWidth: 700) {
                            ...GatsbyContentfulFluid
                        }
                        title
                    }
                }
            }
        }
    `);

    return (
        <div id="haircuts" className="image-container">
            <h1 className="heading">Haircuts</h1>
            <img src={Divider} alt="divider" className="divider" />

            <div className="image-grid">
                {data.allContentfulAsset.edges.map((image: any, key: number) => (
                    <Img
                        key={key}
                        className="image-item"
                        fluid={image.node.fluid}
                        alt={image.node.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default HaircutImages;
