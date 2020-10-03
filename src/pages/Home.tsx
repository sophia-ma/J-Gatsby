import React from 'react';
import { Layout, SEO, AboutMeSection, TatooImages, HaircutImages } from '../components';

const Home = () => (
    <Layout>
        <SEO title="Home" />
        <AboutMeSection />
        <TatooImages />
        <HaircutImages />
    </Layout>
);

export default Home;
