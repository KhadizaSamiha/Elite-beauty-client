import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-24'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;