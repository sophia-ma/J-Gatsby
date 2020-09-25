import React from 'react';
import Logo from '../components/logo';
import SEO from '../components/seo';
import { navigate } from 'gatsby';

// const IndexPage = () => (
//     <>
//         <SEO title="Intro" />
//         <div className="logo-container">
//             <Logo />
//             <h1
//                 style={{
//                     color: `white`,
//                 }}
//             >
//                 ... Please take a seat!!
//             </h1>
//         </div>
//     </>
// );

// export default IndexPage;

export default function IndexPage() {
    const goTo = () => {
        navigate('/page-2');
    };

    return (
        <a href="#" onClick={goTo}>
            <SEO title="Intro" />
            <div className="logo-container">
                <Logo />
                <h1
                    style={{
                        color: `white`,
                    }}
                >
                    ... Please take a seat!!
                </h1>
            </div>
        </a>
    );
}
