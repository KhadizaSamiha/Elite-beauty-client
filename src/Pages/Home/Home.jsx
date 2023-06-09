import React from 'react';
import { Helmet } from 'react-helmet-async';
import PopularClasses from './PopularClasses';
import Banner from './Banner';
import Header from './Header';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Elite Beauty</title>
            </Helmet>
            <Header></Header>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <Footer></Footer>
        </div>
    );
};

export default Home;