import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';

import { SiStartrek } from 'react-icons/si';

function Footer() {
    return (
        <footer>
            <div className='footer_logo'>
                <div>
                    <SiStartrek className='icon' />
                    <h5>loco.ai</h5>
                </div>
                <p>Smarter collaboration, less effort</p>
            </div>

            <div className='footer_content'>
                <main>
                    <div className='footer_content-column'>
                        <h6>Product</h6>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Documentation</p>
                    </div>
                    <div className='footer_content-column'>
                        <h6>Company</h6>
                        <p>About Us</p>
                        <p>Blog</p>
                    </div>
                    <div className='footer_content-column'>
                        <h6>Contact</h6>
                        <p>Matrix Office Park, Zagreb 10000, Croatia</p>
                        <p>contact@locoAI.com</p>
                    </div>
                </main>

                <div className='footer_contact'>
                    <div className='icons_container'>
                        <div className='icon_wrapper'>
                            <FaYoutube className='icon' />
                        </div>
                        <div className='icon_wrapper'>
                            <FaTiktok className='icon' />
                        </div>
                        <div className='icon_wrapper'>
                            <FaInstagram className='icon' />
                        </div>
                        <div className='icon_wrapper'>
                            <FaTwitter className='icon' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer_bottom'>
                <p>All rights reserverd 2025 loco.AI</p>
                <div>
                    <p>Privacy Policy</p>
                    <p>EULA</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
