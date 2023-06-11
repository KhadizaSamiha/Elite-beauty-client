import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlinePlusCircle, AiFillEdit, AiOutlineHome } from 'react-icons/ai'
import { FaChalkboardTeacher, FaUser, FaListAlt } from 'react-icons/fa'
import { BsStars } from 'react-icons/bs'
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side max-h-[700px]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-rose-100 text-base-content">
                        {/* Sidebar content here */}
                       
                        
                     {
                        isAdmin ?  (<><li><Link to='/dashboard/manageClasses'><FaListAlt />Manage Classes</Link></li>
                        <li><Link to='/dashboard/manageUsers'><FaUser />Manage Users</Link></li></>) : (isInstructor ? (<><li><Link to='/dashboard/addClass'><AiOutlinePlusCircle className='text-lg' />Add Class</Link></li>
                        <li><Link to='/dashboard/myClass'><AiFillEdit className='text-lg' />My Classes</Link></li></>) : (<li>Student</li>)) 
                     }


                        <div className="divider"></div>

                        <li><Link to='/'><AiOutlineHome className='text-lg' />Home</Link></li>
                        <li><Link to='/instructor'><FaChalkboardTeacher className='text-lg' />Instructor</Link></li>
                        <li><Link to='/classes'><BsStars className='text-lg' />Classes</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;