import React from 'react';
import { SiStartrek } from 'react-icons/si';

function Trial() {
    return (
        <section className='freeTrial_section'>
            <h6>ready to get started?</h6>
            <h2>Start your free trial today.</h2>
            <button>
                <SiStartrek className='icon' />
                Get started for Free
            </button>
        </section>
    );
}

export default Trial;
