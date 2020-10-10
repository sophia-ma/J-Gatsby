import React from 'react';
import { Layout, SEO, AboutMe, TatooImages, HaircutImages, ContactForm } from '../components';

const Home = () => (
    <Layout>
        <SEO title="Home" />
        <AboutMe />
        <TatooImages />
        <HaircutImages />
        <ContactForm />
    </Layout>
);

export default Home;
