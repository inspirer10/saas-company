import React from 'react';
import { SiStartrek } from 'react-icons/si';

function Header() {
    return (
        <header>
            <nav>
                <div className='logo'>
                    <SiStartrek className='icon' />
                    <h5>loco.ai</h5>
                </div>
                <div className='links'>
                    <p>Home</p>
                    <p>Solutions</p>
                    <p>Opinions</p>
                    <p>Pricing</p>
                    <p>FAQ</p>
                </div>
                <button>
                    <SiStartrek className='icon' />
                    Get started
                </button>
            </nav>
        </header>
    );
}

export default Header;
