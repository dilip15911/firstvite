import React from 'react';
import '../assets/css/style.scss';
import Footer from './Footer';
import Navbar from './Navbar';
import Hero from './Hero';
// import Mainn from './Mainn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Program from './program';

const Home = () => {
    const handleLogin = () => {
        console.log('Login button clicked');
        // Add your login logic here, such as opening a modal or redirecting
    };

    return (
        <>
            {/* Directly include Navbar and Footer components */}
            <Navbar />
            <Hero />
            {/* <Mainn /> */}
            <Program />
            <Footer />
        </>
    );
};

export default Home;
