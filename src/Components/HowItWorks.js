import Image from 'next/image';
import React from 'react';
import { GrFormUpload } from 'react-icons/gr';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { BsStars } from 'react-icons/bs';

function HowItWorks() {
    return (
        <section className='howItWorks_section'>
            <h6>HOW IT WORKS</h6>
            <h2>Just 3 steps to get started</h2>

            <article>
                <div className='steps_wrapper'>
                    <div className='step'>
                        <div className='icon_wrapper'>
                            <GrFormUpload className='icon' />
                        </div>
                        <div className='step_content'>
                            <h5>1. Upload Your Data</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit, deserunt. Itaque
                                obcaecati incidunt sequi eius laudantium commodi
                                tempore ipsa a rerum.
                            </p>
                        </div>
                    </div>

                    <div className='step'>
                        <div className='icon_wrapper'>
                            <AiOutlineThunderbolt className='icon' />
                        </div>
                        <div className='step_content'>
                            <h5>2. Click Start</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit, deserunt. Itaque
                                obcaecati incidunt sequi eius laudantium commodi
                                tempore ipsa a rerum.
                            </p>
                        </div>
                    </div>

                    <div className='step'>
                        <div className='icon_wrapper'>
                            <BsStars className='icon' />
                        </div>
                        <div className='step_content'>
                            <h5>3. Get Actionable Insights</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit, deserunt. Itaque
                                obcaecati incidunt sequi eius laudantium commodi
                                tempore ipsa a rerum.
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
