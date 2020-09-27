import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Layout.scss';

interface Props {
    children?: any;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
};

export default Layout;
