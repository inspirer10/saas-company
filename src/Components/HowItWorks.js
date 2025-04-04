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
