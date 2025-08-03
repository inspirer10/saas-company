import React from 'react';

import { motion } from 'motion/react';

import { LuBrain, LuShield } from 'react-icons/lu';
import { AiOutlineThunderbolt } from 'react-icons/ai';

function Problem() {
    return (
        <section className='problem_section' id='purpose'>
            <motion.h5
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true }}
            >
                PROBLEM
            </motion.h5>

            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.1 }}
                viewport={{ once: true }}
            >
                Manually entering your data is a hassle.
            </motion.h2>

            <article>
                <motion.div
                    className='card'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.1, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                >
                    <div className='icon_wrapper'>
                        <LuBrain className='icon' />
                    </div>
                    <h6>Data Overload</h6>
                    <p>
                        Manually processing large amounts of data is slow and
                        leads to inefficiencies. AI helps streamline workflows
                        and reduce errors.
                    </p>
                </motion.div>

                <motion.div
                    className='card'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 1.1,
                        ease: 'easeInOut',
                        delay: 0.35,
                    }}
                    viewport={{ once: true }}
                >
                    <div className='icon_wrapper'>
                        <AiOutlineThunderbolt className='icon' />
                    </div>
                    <h6>Slow Decision-Making</h6>
                    <p>
                        The longer it takes to process data, the slower your
                        business moves. Automation speeds up operations and
                        ensures accuracy
                    </p>
                </motion.div>

                <motion.div
                    className='card'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 1.1,
                        ease: 'easeInOut',
                        delay: 0.7,
                    }}
                    viewport={{ once: true }}
                >
                    <div className='icon_wrapper'>
                        <LuShield className='icon' />
                    </div>
                    <h6>Data Security Concerns</h6>
                    <p>
                        Manual data entry increases the risk of errors and
                        breaches. AI-powered solutions help maintain data
                        integrity and security.
                    </p>
                </motion.div>
            </article>
        </section>
    );
}

export default Problem;
