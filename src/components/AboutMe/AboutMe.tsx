import React from 'react';
import Divider from 'images/divider.png';
import './AboutMe.scss';

const AboutMe: React.FC = () => {
    return (
        <div id="about-me" className="about-me-container">
            <h1 className="heading">About me</h1>
            <img src={Divider} alt="divider" className="divider" />

            <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada augue
                neque, id hendrerit lacus accumsan id. Suspendisse potenti. Nam ut ligula at felis
                molestie cursus consectetur et justo. Donec vitae elementum arcu. Suspendisse
                potenti. Nunc fringilla, purus eget mattis luctus, metus purus lobortis leo, ac
                ornare lorem lacus sed sapien. Vivamus vel efficitur eros, id semper augue. Nunc sit
                amet mattis lectus, vitae tristique ligula. Praesent convallis eget orci ut mattis.
                Nam imperdiet pharetra felis, ac iaculis nulla dapibus sed. Nulla dapibus vestibulum
                quam sed molestie. Donec volutpat et dui sed fermentum.
            </p>
        </div>
    );
};

export default AboutMe;
