import Image from 'next/image';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

function Testimonials() {
    return (
        <section className='testimonials_section'>
            <article className='images_wrapper'>
                <div className='outer_div'>
                    <Image
                        src={'/person1.jpg'}
                        height={300}
                        width={300}
                        alt='person'
                        loading='lazy'
                    />
                    <Image
                        src={'/person2.jpg'}
                        height={300}
                        width={300}
                        alt='person'
                        loading='lazy'
                    />
                </div>
                <div className='inner_div'>
                    <Image
                        src={'/person10.jpg'}
                        height={300}
                        width={300}
                        alt='person'
                        loading='lazy'
                    />
                    <Image
                        src={'/person6.jpg'}
                        height={300}
                        width={300}
                        alt='person'
                        loading='lazy'
                    />
                </div>
                <Image
                    src={'/person11.jpg'}
                    height={300}
                    width={300}
                    alt='person'
                    loading='lazy'
                    className='outer_single-image'
                />
                <Image
                    src={'/person0.jpg'}
                    height={300}
                    width={300}
                    alt='person'
                    loading='lazy'
                    className='inner_single-image'
                />
                <Image
                    src={'/person7.jpg'}
                    height={300}
                    width={300}
                    alt='person'
                    loading='lazy'
                    className='middle_single-image'
                />
                <Image
                    src={'/person12.jpg'}
                    height={300}
                    width={300}
                    alt='person'
                    loading='lazy'
                    className='inner_single-image'
                />
                <Image
                    src={'/person5.jpg'}
                    height={300}
                    width={300}
                    alt='person'
                    loading='lazy'
                    className='outer_single-image'
                />
                <div className='inner_div'>
                    <Image
                        src={'/person8.jpg'}
                        height={300}
                        width={300}
                        alt='person'
                        loading='lazy'
                    />
                    <Image
                        src={'/person9.jpg'}
                        height={300}
                        width={300}
                        alt='person'
                        loading='lazy'
                    />
                </div>
                <div className='outer_div'>
                    <Image
                        src={'/person3.jpg'}
                        height={300}
                        width={300}
                        alt='person'
                        loading='lazy'
                    />
                    <Image
                        src={'/person4.jpg'}
                        height={300}
                        width={300}
                        alt='person'
                        loading='lazy'
                    />
                </div>
            </article>
            <p className='subheading'>Testimonials</p>
            <h2>Trusted by leaders</h2>
            <h2>from various industries</h2>
            <p className='description'>
                Learn why professionals trust our solutions to complete their
                customer journeys.
            </p>
            <button>
                Read Success Stories <FaArrowRightLong className='arrow_icon' />
            </button>
        </section>
    );
}

export default Testimonials;
