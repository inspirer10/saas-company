import Image from 'next/image';
import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiStartrek } from 'react-icons/si';

function Footer() {
    return (
        <footer>
            <div className='footer_logo'>
                <SiStartrek className='icon' />
                <h5>loco.ai</h5>
            </div>

            <div className='footer_content'>
                <div className='footer_content-column'>
                    <h6>Product</h6>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Documentation</p>
                    <p>API</p>
                </div>
                <div className='footer_content-column'>
                    <h6>Company</h6>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Blog</p>

                    <p>Partners</p>
                </div>
                <div className='footer_content-column'>
                    <h6>Resources</h6>
                    <p>Community</p>
                    <p>Contact</p>
                    <p>Support</p>
                    <p>Status</p>
                </div>
                <div className='footer_content-column'>
                    <h6>Social</h6>
                    <p>
                        <FaTwitter className='icon' />
                        Twitter
                    </p>
                    <p>
                        <FaInstagram className='icon' />
                        Instagram
                    </p>
                    <p>
                        <FaYoutube className='icon' />
                        YouTube
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
