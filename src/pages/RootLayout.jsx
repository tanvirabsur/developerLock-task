import React from 'react';
import { Outlet } from 'react-router';
import AirbnbNavbar from '../components/NavBar';
import AirbnbFooter from '../components/Footer';

const RootLayout = () => {
    return (
        <>
            <AirbnbNavbar />
            <Outlet></Outlet>
            <AirbnbFooter />
        </>
    );
};

export default RootLayout;