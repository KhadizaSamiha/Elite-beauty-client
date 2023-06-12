import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='h-[700px]'>
            <img className='h-full w-full relative' src="https://i.ibb.co/y8TWL7K/1593076-224735-P2-H3-ZG-700.jpg" alt="" />
            <button className='absolute top-3 right-96 mr-72 btn btn-warning'><Link to='/'>Back To Home</Link></button>
        </div>
    );
};

export default Error;