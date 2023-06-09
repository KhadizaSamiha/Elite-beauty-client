import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navOptions = <>
        <li className='font-medium text-lg'><Link to='/'>Home</Link></li>
        <li className='font-medium text-lg'><Link to='/instructors'>Instructor</Link></li>
        <li className='font-medium text-lg'><Link to='/classes'>Classes</Link></li>
        <li className='font-medium text-lg'><Link to='/dashboard'>Dashboard</Link></li>
        <li className='font-medium text-lg'><Link to='/secret'>Secret</Link></li>
    </>
    return (
        <div className="navbar bg-pink-200 fixed z-10  h-[100px] pb-5 lg:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl"><div className='border border-1 px-8 py-4 border-pink-600'>Elite Beauty</div></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            {
                user ? <>
                    <div>
                        <button onClick={handleLogOut} className='btn btn-ghost '>LogOut</button>
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={user.photoUrl} />
                            </div>
                        </div>
                    </div>
                </> :
                    <>
                        <li><Link to='/login'>Login</Link></li>
                    </>
            }
        </div>
    );
};

export default Navbar;