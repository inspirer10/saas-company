import React from 'react';
import { SiStartrek } from 'react-icons/si';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GrAnnounce } from 'react-icons/gr';
import { FaPlayCircle } from 'react-icons/fa';

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

            <h1>
                <span>Automate</span> your workflow with <span>AI</span> <br />
                by just one click
            </h1>
            <p>
                No matter what problem you have, our AI can help you solve it{' '}
                <br />
                From concept to launch in minutes, not months
            </p>

            <div className='buttons-wrapper'>
                <button className='get_started-button'>
                    <SiStartrek className='icon' />
                    Get started for Free
                </button>
                <button className='watch_demo-button'>
                    <FaPlayCircle className='icon' />
                    Watch Demo <span>3mins</span>
                </button>
            </div>

            <p className='free_trial'>
                7 day free trial. No credit card required
            </p>
        </section>
    );
}

export default Introduction;
