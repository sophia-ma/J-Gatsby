import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Layout.scss';

interface Props {
    children?: any;
}

const Layout = ({ children }: Props) => {
    return (
        <div style={{ position: `relative` }}>
            <Navbar />
            <main className="main-section">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
