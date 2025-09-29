import React from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters';
import PropertyList from '../components/PropertyList';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <Navbar/>
            {/* <Filters /> */}
            {/* <PropertyList /> */}
            <Footer />
        </div>
    );
};

export default Home;