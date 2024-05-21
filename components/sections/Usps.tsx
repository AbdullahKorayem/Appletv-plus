import React from 'react'
import Container from '../Container'
import FadeIn from '../FadeIn'
import Subscriptions from './Subscriptions'

export default function Usps() {
    return (
        <Container className='md:text-4xl text-3xl font-bold z-10 relative space-y-12 py-60 text-white max-w-[1200px]'>
            <FadeIn>
                <p>New Apple Originals every month — always ad‑free.</p>
            </FadeIn>
            <FadeIn>
                <p>
                    Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
                    sticks.
                </p>
            </FadeIn>
            <FadeIn>
                <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
            </FadeIn>
            <FadeIn >
                <p>Share a single subscription with up to five people.</p>
            </FadeIn>
         
        </Container>
    )
}

