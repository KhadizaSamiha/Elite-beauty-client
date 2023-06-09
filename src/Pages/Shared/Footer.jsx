import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-pink-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Makeup</a>
                    <a className="link link-hover">Hair</a>
                    <a className="link link-hover">Facial</a>
                    <a className="link link-hover">Nail</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                <a className="btn btn-ghost normal-case text-3xl"><div className='border border-1 px-8 py-4 border-pink-600'>Elite Beauty</div></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;