import React from 'react';

import { motion } from 'framer-motion';

import { SiStartrek } from 'react-icons/si';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GrAnnounce } from 'react-icons/gr';
import { FaPlayCircle } from 'react-icons/fa';

function Introduction() {
    return (
        <section className='introduction_section'>
            <motion.div
                className='introduction_wrapper'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                viewport={{ once: true }}
            >
                <span className='announcement'>
                    <GrAnnounce className='icon' />
                    Announcement
                </span>
                Introducing <span className='company'>loco.ai</span>
                <FaArrowRightLong className='arrow_icon' />
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.25 }}
                viewport={{ once: true }}
            >
                <span className='colored-span'>Automate</span> your workflow
                with <span className='colored-span'>AI</span> <br />
                by just <span className='span'>one click</span>
            </motion.h1>

            <motion.p
                className='subHeading'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.5 }}
                viewport={{ once: true }}
            >
                No matter what problem you have, our AI can help you solve it{' '}
                <br />
                From concept to launch in minutes, not months
            </motion.p>

            <motion.div
                className='buttons-wrapper'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.75 }}
                viewport={{ once: true }}
            >
                <button className='get_started-button'>
                    <SiStartrek className='icon' />
                    Get started for Free
                </button>

                <button className='watch_demo-button'>
                    <FaPlayCircle className='icon' />
                    Watch Demo <span>3mins</span>
                </button>
            </motion.div>

            <motion.p
                className='free_trial'
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
                viewport={{ once: true }}
            >
                7 day free trial. No credit card required
            </motion.p>
        </section>
    );
}

export default Introduction;
