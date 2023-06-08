import React from 'react';
import { Helmet } from 'react-helmet-async';
import PopularClasses from './PopularClasses';
import Banner from './Banner';
import Header from './Header';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Elite Beauty</title>
            </Helmet>
            <Header></Header>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;