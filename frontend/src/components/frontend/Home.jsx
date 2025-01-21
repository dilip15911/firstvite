import React from 'react';
import '../../assets/css/style.scss';
import Navbar from `./Navbar.jsx`;
import Footer from './Footer';


const Home = () => {
    const handleLogin = () => {
        console.log('Login button clicked');
        // Add your login logic here, such as opening a modal or redirecting
    };

    return (
        <>
            <nav>
                <Navbar />
            </nav>



            <footer>
                <Footer />
            </footer>


        </>



    );
};

export default Home;
