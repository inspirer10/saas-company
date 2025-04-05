import React from 'react';
import { SiStartrek } from 'react-icons/si';

function Header() {
    return (
        <header>
            <nav>
                <div
                    className='logo'
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                >
                    <SiStartrek className='icon' />
                    <h5>loco.ai</h5>
                </div>
                <div className='links'>
                    <a
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                    >
                        Home
                    </a>
                    <a href='#purpose'>Purpose</a>
                    <a href='#about'>About</a>
                    <a href='#pricing'>Pricing</a>
                    <a href='#faq'>FAQ</a>
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
