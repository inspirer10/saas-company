import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Star, Check, ArrowRight } from 'lucide-react';

export default function TestComponent() {
    return (
        <div className='flex flex-col min-h-screen'>
            {/* Navigation */}
            <header className='px-4 lg:px-6 h-14 flex items-center'>
                <Link className='flex items-center justify-center' href='#'>
                    <MountainIcon className='h-6 w-6' />
                    <span className='sr-only'>SaaS Company</span>
                </Link>
                <nav className='ml-auto flex gap-4 sm:gap-6'>
                    <Link
                        className='text-sm font-medium hover:underline underline-offset-4'
                        href='#'
                    >
                        Features
                    </Link>
                    <Link
                        className='text-sm font-medium hover:underline underline-offset-4'
                        href='#'
                    >
                        Pricing
                    </Link>
                    <Link
                        className='text-sm font-medium hover:underline underline-offset-4'
                        href='#'
                    >
                        About
                    </Link>
                    <Button variant='outline'>Sign In</Button>
                </nav>
            </header>

            <main className='flex-1'>
                {/* Hero Section */}
                <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
                    <div className='container px-4 md:px-6'>
                        <div className='flex flex-col items-center space-y-4 text-center'>
                            <div className='space-y-2'>
                                <Badge variant='outline'>New Release</Badge>
                                <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
                                    One Global Plan.
                                    <br />
                                    No Hassle.
                                </h1>
                                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                                    Enjoy unlimited global service for $69/mo.
                                    <br />
                                    No roaming fees, no headaches.
                                </p>
                            </div>
                            <div className='w-full max-w-sm space-y-2'>
                                <form className='flex space-x-2'>
                                    <Input
                                        className='max-w-lg flex-1'
                                        placeholder='Enter your email'
                                        type='email'
                                    />
                                    <Button type='submit'>
                                        Get Started
                                        <ArrowRight className='ml-2 h-4 w-4' />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
                    <div className='container px-4 md:px-6'>
                        <div className='grid gap-6 lg:grid-cols-3 lg:gap-12'>
                            <Card>
                                <CardContent className='flex flex-col items-center space-y-4 p-6'>
                                    <div className='p-2 bg-primary/10 rounded-full'>
                                        <Star className='h-6 w-6 text-primary' />
                                    </div>
                                    <h3 className='text-xl font-bold'>
                                        Global Coverage
                                    </h3>
                                    <p className='text-center text-gray-500 dark:text-gray-400'>
                                        Connect seamlessly across 190+ countries
                                        with no extra fees
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className='flex flex-col items-center space-y-4 p-6'>
                                    <div className='p-2 bg-primary/10 rounded-full'>
                                        <Star className='h-6 w-6 text-primary' />
                                    </div>
                                    <h3 className='text-xl font-bold'>
                                        Unlimited Data
                                    </h3>
                                    <p className='text-center text-gray-500 dark:text-gray-400'>
                                        Stream, browse, and download without
                                        worrying about limits
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className='flex flex-col items-center space-y-4 p-6'>
                                    <div className='p-2 bg-primary/10 rounded-full'>
                                        <Star className='h-6 w-6 text-primary' />
                                    </div>
                                    <h3 className='text-xl font-bold'>
                                        24/7 Support
                                    </h3>
                                    <p className='text-center text-gray-500 dark:text-gray-400'>
                                        Get help anytime, anywhere with our
                                        dedicated support team
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className='w-full py-12 md:py-24 lg:py-32'>
                    <div className='container px-4 md:px-6'>
                        <div className='grid gap-10 lg:grid-cols-2'>
                            <div className='space-y-4'>
                                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>
                                    Everything you need in one plan
                                </h2>
                                <ul className='grid gap-4'>
                                    <li className='flex items-center gap-4'>
                                        <Check className='h-6 w-6 text-primary' />
                                        <span>
                                            Unlimited data in 190+ countries
                                        </span>
                                    </li>
                                    <li className='flex items-center gap-4'>
                                        <Check className='h-6 w-6 text-primary' />
                                        <span>5G speeds where available</span>
                                    </li>
                                    <li className='flex items-center gap-4'>
                                        <Check className='h-6 w-6 text-primary' />
                                        <span>Mobile hotspot included</span>
                                    </li>
                                    <li className='flex items-center gap-4'>
                                        <Check className='h-6 w-6 text-primary' />
                                        <span>No contracts or hidden fees</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex items-center justify-center'>
                                <div className='relative'>
                                    <Image
                                        alt='App screenshot'
                                        className='relative z-10 rounded-xl'
                                        height={300}
                                        src='/placeholder.svg'
                                        width={300}
                                    />
                                    <div className='absolute -left-4 top-4 h-full w-full rounded-xl bg-gradient-to-r from-primary to-primary/60' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
                    <div className='container px-4 md:px-6'>
                        <h2 className='text-3xl font-bold tracking-tighter text-center mb-8'>
                            Frequently Asked Questions
                        </h2>
                        <Accordion
                            className='w-full max-w-2xl mx-auto'
                            type='single'
                            collapsible
                        >
                            <AccordionItem value='item-1'>
                                <AccordionTrigger>
                                    How does the global coverage work?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Our service automatically connects you to
                                    local networks in over 190 countries, with
                                    no need to swap SIM cards or configure
                                    settings.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='item-2'>
                                <AccordionTrigger>
                                    What speeds can I expect?
                                </AccordionTrigger>
                                <AccordionContent>
                                    You'll get the fastest available speeds in
                                    each location, including 5G where available.
                                    Typical speeds range from 20-100 Mbps.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='item-3'>
                                <AccordionTrigger>
                                    Can I cancel anytime?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Yes, you can cancel your subscription at any
                                    time with no cancellation fees or hidden
                                    charges.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                {/* CTA Section */}
                <section className='w-full py-12 md:py-24 lg:py-32'>
                    <div className='container px-4 md:px-6'>
                        <div className='flex flex-col items-center space-y-4 text-center'>
                            <div className='space-y-2'>
                                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>
                                    Ready to get started?
                                </h2>
                                <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
                                    Join thousands of satisfied customers
                                    worldwide. Start your journey today.
                                </p>
                            </div>
                            <div className='space-x-4'>
                                <Button size='lg'>Get Started</Button>
                                <Button size='lg' variant='outline'>
                                    Contact Sales
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                    © 2024 SaaS Company. All rights reserved.
                </p>
                <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
                    <Link
                        className='text-xs hover:underline underline-offset-4'
                        href='#'
                    >
                        Terms of Service
                    </Link>
                    <Link
                        className='text-xs hover:underline underline-offset-4'
                        href='#'
                    >
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    );
}

function Link({ href, children, ...props }) {
    return (
        <a href={href} {...props}>
            {children}
        </a>
    );
}

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
        </svg>
    );
}
