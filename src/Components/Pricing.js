import React from 'react';
import { motion } from 'framer-motion';
import { TiTick } from 'react-icons/ti';
import { FaStar } from 'react-icons/fa6';

function Pricing() {
    return (
        <section className='pricing_section' id='pricing'>
            <motion.h6
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true }}
            >
                PRICING
            </motion.h6>

            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.1 }}
                viewport={{ once: true }}
            >
                Choose the plan that's right for you
            </motion.h2>

            <div className='cards_wrapper'>
                <div className='card'>
                    <p className='subsc_type'>BASIC</p>
                    <div className='price_wrapper'>
                        <h3>
                            $19 <span>/month</span>
                        </h3>{' '}
                        <p>billed monthly</p>
                    </div>
                    <ul>
                        <li>
                            <TiTick className='icon' />1 User
                        </li>
                        <li>
                            <TiTick className='icon' />
                            5GB Storage
                        </li>
                        <li>
                            <TiTick className='icon' />
                            Basic Support
                        </li>
                        <li>
                            <TiTick className='icon' />
                            Limited API Access
                        </li>
                        <li>
                            <TiTick className='icon' />
                            Standard Analytics
                        </li>
                    </ul>
                    <button>Subscribe</button>
                    <p className='subsc_description'>
                        Perfect for individuals and small projects
                    </p>
                </div>

                <div className='card highlighted'>
                    <div className='popular'>
                        <FaStar className='star_icon' /> <p>Popular</p>
                    </div>
                    <p className='subsc_type'>PRO</p>
                    <div className='price_wrapper'>
                        <h3>
                            $49 <span>/month</span>
                        </h3>{' '}
                        <p>billed monthly</p>
                    </div>
                    <ul>
                        <li>
                            <TiTick className='icon' />5 Users
                        </li>
                        <li>
                            <TiTick className='icon' />
                            50GB Storage
                        </li>
                        <li>
                            <TiTick className='icon' />
                            Priority Support
                        </li>
                        <li>
                            <TiTick className='icon' />
                            Full API Access
                        </li>
                        <li>
                            <TiTick className='icon' />
                            Advanced Analytics
                        </li>
                    </ul>
                    <button>Subscribe</button>
                    <p className='subsc_description'>
                        Ideal for growing businesses and teams
                    </p>
                </div>

                <div className='card'>
                    <p className='subsc_type'>ENTERPRISE</p>
                    <div className='price_wrapper'>
                        <h3>
                            $99 <span>/month</span>
                        </h3>{' '}
                        <p>billed monthly</p>
                    </div>
                    <ul>
                        <li>
                            <TiTick className='icon' />
                            Unlimited Users
                        </li>
                        <li>
                            <TiTick className='icon' />
                            500GB Storage
                        </li>
                        <li>
                            <TiTick className='icon' />
                            24/7 Premium Support
                        </li>
                        <li>
                            <TiTick className='icon' />
                            Custom Integrations
                        </li>
                        <li>
                            <TiTick className='icon' />
                            AI-Powered Insights
                        </li>
                    </ul>
                    <button>Subscribe</button>
                    <p className='subsc_description'>
                        For large-scale operations and high-volume users
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
