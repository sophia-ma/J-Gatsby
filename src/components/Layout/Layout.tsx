import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Layout.scss';

interface Props {
    children?: any;
}

if (typeof window !== 'undefined') {
    require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <main className="main-section">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
