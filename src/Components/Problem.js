import React from 'react';
import { LuBrain, LuShield } from 'react-icons/lu';
import { AiOutlineThunderbolt } from 'react-icons/ai';

function Problem() {
    return (
        <section className='problem_section'>
            <h5>PROBLEM</h5>
            <h2>Manually entering your data is a hassle.</h2>

            <article>
                <div className='card'>
                    <div className='icon_wrapper'>
                        <LuBrain className='icon' />
                    </div>
                    <h6>Data Overload</h6>
                    <p>
                        Manually processing large amounts of data is slow and
                        leads to inefficiencies. AI helps streamline workflows
                        and reduce errors.
                    </p>
                </div>
                <div className='card'>
                    <div className='icon_wrapper'>
                        <AiOutlineThunderbolt className='icon' />
                    </div>
                    <h6>Slow Decision-Making</h6>
                    <p>
                        The longer it takes to process data, the slower your
                        business moves. Automation speeds up operations and
                        ensures accuracy
                    </p>
                </div>
                <div className='card'>
                    <div className='icon_wrapper'>
                        <LuShield className='icon' />
                    </div>
                    <h6>Data Security Concerns</h6>
                    <p>
                        Manual data entry increases the risk of errors and
                        breaches. AI-powered solutions help maintain data
                        integrity and security.
                    </p>
                </div>
            </article>
        </section>
    );
}

export default Problem;
