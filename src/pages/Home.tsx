import React from 'react';
import { Layout, SEO, TatooImages, HaircutImages, ContactForm } from '../components';

const Home = () => (
    <Layout>
        <SEO title="Home" />
        <TatooImages />
        <HaircutImages />
        <ContactForm />
    </Layout>
);

export default Home;
