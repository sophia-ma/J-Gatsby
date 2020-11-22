import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Divider from 'images/divider.png';
import './AboutMe.scss';

interface DataProps {
    allContentfulSection: {
        nodes: Node[];
    };
}

interface Node {
    aboutMe: {
        aboutMe: string;
    };
    aboutMeSeeMore: {
        aboutMeSeeMore: string;
    };
}
const AboutMe: React.FC = () => {
    const data: DataProps = useStaticQuery(graphql`
        query {
            allContentfulSection {
                nodes {
                    aboutMe {
                        aboutMe
                    }
                    aboutMeSeeMore {
                        aboutMeSeeMore
                    }
                }
            }
        }
    `);

    const getRichText = (text: string) => {
        return text.split('\n').flatMap((text, i) => [<br />, text]);
    };

    const [moreContentStyle, setMoreContentStyle] = useState('none');
    const [seeMoreStyle, setSeeMoreStyle] = useState('inline');

    return (
        <div id="about-me" className="about-me-container">
            <h1 className="heading">About me</h1>
            <img src={Divider} alt="divider" className="divider" />

            <div className="content">
                {getRichText(data.allContentfulSection.nodes[0].aboutMe.aboutMe)}{' '}
                <span
                    className="see-more"
                    style={{ display: seeMoreStyle }}
                    onClick={() => {
                        setMoreContentStyle('block');
                        setSeeMoreStyle('none');
                    }}
                >
                    ...See more
                </span>
            </div>

            <div className="content" style={{ display: moreContentStyle }}>
                {getRichText(data.allContentfulSection.nodes[0].aboutMeSeeMore.aboutMeSeeMore)}
            </div>
        </div>
    );
};

export default AboutMe;
