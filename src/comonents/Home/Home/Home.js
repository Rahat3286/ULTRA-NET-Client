import React from 'react';
import Facilities from '../Facilities/Facilities';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Facilities/>
            <Services/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;