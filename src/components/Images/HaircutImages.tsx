import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import Img from 'gatsby-image';
import ImageDialog from './Dialog/Dialog';
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
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                        title
                    }
                }
            }
        }
    `);

    const [showDialog, setShowDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    return (
        <div id="haircuts" className="image-container">
            <h1 className="heading">Haircuts</h1>
            <img src={Divider} alt="divider" className="divider" />

            <div className="image-grid">
                {data.allContentfulAsset.edges.map((image: any, key: number) => (
                    <div
                        key={key}
                        onClick={() => {
                            setSelectedImage(image);
                            open();
                        }}
                    >
                        <Img
                            key={key}
                            fluid={{ ...image.node.fluid, aspectRatio: 1 }}
                            alt={image.node.title}
                        />
                    </div>
                ))}
            </div>

            {showDialog && (
                <ImageDialog selectedValue={selectedImage} open={showDialog} close={close} />
            )}
        </div>
    );
};

export default HaircutImages;
