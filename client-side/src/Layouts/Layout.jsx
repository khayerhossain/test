import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import AnimatedPageWrapper from '../Providers/AnimatedPageWrapper/AnimatedPageWrapper';

const Layout = () => {
    return (
        <div className=''>
            <Navbar/>
            <AnimatedPageWrapper>
                <div className='min-h-screen'>
                    <Outlet/>
                </div>
            </AnimatedPageWrapper>
            <Footer/>
        </div>
    );
};

export default Layout;