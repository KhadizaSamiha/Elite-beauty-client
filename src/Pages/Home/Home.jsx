import React from 'react';
import { Helmet } from 'react-helmet-async';
import PopularClasses from './PopularClasses';
import Banner from './Banner';
import Header from './Header';
import PopularInstructors from './PopularInstructors';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Elite Beauty</title>
            </Helmet>
            <Header></Header>
            <PopularInstructors></PopularInstructors>
            <PopularClasses></PopularClasses>
            <Banner></Banner>
        </div>
    );
};

export default Home;