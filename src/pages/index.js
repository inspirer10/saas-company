import Lenis from 'lenis';
import Head from 'next/head';
import { useEffect } from 'react';

import Header from '@/Components/Header';
import Pricing from '@/Components/Pricing';
import FAQ from '@/Components/FAQ';
import Trial from '@/Components/Trial';
import Footer from '@/Components/Footer';
import Introduction from '@/Components/Introduction';
import Problem from '@/Components/Problem';
import HowItWorks from '@/Components/HowItWorks';
import Testimonials from '@/Components/Testimonials';

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <>
            <Head>
                <title>Your SaaS Company</title>
                <meta name='description' content='Your SaaS Company' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <>
                <Header />
                <Introduction />
                <Problem />
                <HowItWorks />
                <Pricing />
                <Testimonials />
                <FAQ />
                <Trial />
                <Footer />
            </>
        </>
    );
}
