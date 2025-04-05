import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { GrFormUpload } from 'react-icons/gr';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { BsStars } from 'react-icons/bs';

function HowItWorks() {
    return (
        <section className='howItWorks_section'>
            <motion.h6
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true }}
            >
                HOW IT WORKS
            </motion.h6>

            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.1 }}
                viewport={{ once: true }}
            >
                Just 3 steps to get started
            </motion.h2>

            <article>
                <div className='steps_wrapper'>
                    <div className='step'>
                        <div className='icon_wrapper'>
                            <GrFormUpload className='icon' />
                        </div>
                        <div className='step_content'>
                            <h5>
                                <span>1.</span> Upload Your Data
                            </h5>
                            <p>
                                Simply drag and drop your files or connect your
                                database. Our system will process them in
                                seconds.
                            </p>
                        </div>
                    </div>

                    <div className='step'>
                        <div className='icon_wrapper'>
                            <AiOutlineThunderbolt className='icon' />
                        </div>
                        <div className='step_content'>
                            <h5>
                                <span>2.</span> Click Start
                            </h5>
                            <p>
                                Activate the AI with a single click. It will
                                analyze your data and optimize your workflow.
                            </p>
                        </div>
                    </div>

                    <div className='step'>
                        <div className='icon_wrapper'>
                            <BsStars className='icon' />
                        </div>
                        <div className='step_content'>
                            <h5>
                                <span>3.</span> Get Actionable Insights
                            </h5>
                            <p>
                                Receive clear, data-driven insights to make
                                informed decisions and boost efficiency.
                            </p>
                        </div>
                    </div>
                </div>

                <Image src={''} height={350} width={700} />
            </article>
        </section>
    );
}

export default HowItWorks;
