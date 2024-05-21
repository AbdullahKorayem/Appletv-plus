import React from 'react';
import FadeIn from '../FadeIn';
import { appleSubscriptions } from '@/constants';
import Button from '../Button';
import Container from '../Container';
import Link from 'next/link';


export default function Subscriptions() {
    return (
        <Container className='md:text-4xl text-3xl p-6 font-bold z-10 relative gap-2  pb-20 text-white max-w-[1200px]'>

            <section className='flex space-x-30  flex-col text-center md:flex-row space-y-10 '>
                {appleSubscriptions.map((subscribe, index) => (
                    <FadeIn key={index} >
                        <div className='flex flex-col'>
                            <h2 className='text-[28px] font-bold'>{subscribe.title}</h2>
                            <h3 className='mb-2 text-[40px] mt-5'>{subscribe.subtitle}</h3>
                            <p className='text-textDescription text-[17px] font-light mt-2 mb-9'>{subscribe.description}</p>
                            <div>
                                {subscribe.buttonText === 'Learn more' ? (
                                    <Link className='text-xs font-light text-[#2997ff]' href={subscribe.buttonText}>
                                        {subscribe.buttonText}
                                    </Link>
                                ) : <Button>{subscribe.buttonText}</Button>}

                            </div>
                        </div>
                    </FadeIn>
                ))}
            </section>
        </Container>
    );
}
