import React from 'react';
import { Layout, SEO, AboutMe, TatooImages, HaircutImages } from '../components';

const Home = () => (
    <Layout>
        <SEO title="Home" />
        <AboutMe />
        <TatooImages />
        <HaircutImages />
    </Layout>
);

export default Home;
