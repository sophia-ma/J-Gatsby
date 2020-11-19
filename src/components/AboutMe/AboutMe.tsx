import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Divider from 'images/divider.png';
import './AboutMe.scss';

interface DataProps {
    contentfulAboutMeTextRichTextNode: {
        json: any;
    };
}
const AboutMe: React.FC = () => {
    const data: DataProps = useStaticQuery(graphql`
        query {
            contentfulAboutMeTextRichTextNode {
                json
            }
        }
    `);

    const options = {
        renderText: (text: string) => {
            return text.split('\n').flatMap((text, i) => [<br />, text]);
        },
    };

    return (
        <div id="about-me" className="about-me-container">
            <h1 className="heading">About me</h1>
            <img src={Divider} alt="divider" className="divider" />

            <div className="content">
                {documentToReactComponents(data.contentfulAboutMeTextRichTextNode.json, options)}
            </div>
        </div>
    );
};

export default AboutMe;
