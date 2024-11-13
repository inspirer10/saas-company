import React from 'react';
import { SiStartrek } from 'react-icons/si';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GrAnnounce } from 'react-icons/gr';

function Introduction() {
    return (
        <section className='introduction_section'>
            <div className='introduction_wrapper'>
                <span className='announcement'>
                    <GrAnnounce className='icon' />
                    Announcement
                </span>
                Introducing <span className='company'>loco.ai</span>
                <FaArrowRightLong className='arrow_icon' />
            </div>

            <h1>Automate your workflow with AI</h1>
            <p>No matter what problem you have, our AI can help you solve it</p>
            <button>
                <SiStartrek className='icon' />
                Get started for Free
            </button>
            <p className='free_trial'>
                7 day free trial. No credit card required
            </p>
        </section>
    );
}

export default Introduction;
