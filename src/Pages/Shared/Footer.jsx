import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-pink-200 text-base-content mt-10">
                <div className='ml-5 lg:ml-0'>
                    <span className="footer-title text-pink-900">Services</span>
                    <a className="link link-hover text-pink-700">Makeup</a>
                    <a className="link link-hover text-pink-700">Hair</a>
                    <a className="link link-hover text-pink-700">Facial</a>
                    <a className="link link-hover text-pink-700">Nail</a>
                </div>
                <div className='ml-5 lg:ml-0'>
                    <span className="footer-title text-pink-900">Company</span>
                    <a className="link link-hover text-pink-700">About us</a>
                    <a className="link link-hover text-pink-700">Contact</a>
                    <a className="link link-hover text-pink-700">Jobs</a>
                    <a className="link link-hover text-pink-700">Press kit</a>
                </div>
                <div>
                    <a className="btn btn-ghost normal-case text-3xl"><div className='border border-1 px-8 py-4 border-pink-600'>Elite Beauty</div></a>
                    <div className='lg:ml-10 ml-5 mt-10'>
                        <h4 className='text-lg font-medium  text-pink-700'>Follow Us On</h4>
                        <div className='flex space-x-2'>
                            <Link><FaFacebook className='text-pink-500' /></Link>
                            <Link><FaTwitter className='text-pink-500' /></Link>
                            <Link><FaInstagram className='text-pink-500' /></Link>
                            <Link><FaLinkedin className='text-pink-500' /></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;