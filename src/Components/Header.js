import React from 'react';
import { SiStartrek } from 'react-icons/si';

function Header() {
    const handleSectionRouting = (e, section) => {
        e.preventDefault();

        // Jeśli jesteśmy na stronie głównej, przewiń do sekcji
        document
            .getElementById(`${section}`)
            ?.scrollIntoView({ behavior: 'smooth' });
    };

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
                    <a
                        href='#purpose'
                        onClick={(e) => handleSectionRouting(e, 'purpose')}
                    >
                        Purpose
                    </a>
                    <a
                        href='#about'
                        onClick={(e) => handleSectionRouting(e, 'about')}
                    >
                        About
                    </a>
                    <a
                        href='#pricing'
                        onClick={(e) => handleSectionRouting(e, 'pricing')}
                    >
                        Pricing
                    </a>
                    <a
                        href='#faq'
                        onClick={(e) => handleSectionRouting(e, 'faq')}
                    >
                        FAQ
                    </a>
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
