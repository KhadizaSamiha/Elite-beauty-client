import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navOptions = <>
        <li className='font-medium text-lg'><Link to='/'>Home</Link></li>
        <li className='font-medium text-lg'><Link to='/instructors'>Instructor</Link></li>
        <li className='font-medium text-lg'><Link to='/classes'>Classes</Link></li>
    </>
    return (
             <div className="navbar fixed z-10 bg-pink-300 fixed z-10 bg-opacity-50 h-24 pb-5 lg:px-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><div className='border border-1 px-8 py-4 border-pink-600'>Elite Beauty</div></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
    );
};

export default Navbar;