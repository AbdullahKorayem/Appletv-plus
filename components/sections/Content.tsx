'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import Container from '../Container'
import Link from 'next/link'
import { contentIcons } from '@/constants'
import Accordions from '../Accordion'
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

export default function Content() {
    const IconsContentRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: IconsContentRef,
        offset: ["start start", "end start"]
    })
    const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <Container>

            <section className='flex flex-col pt-48 items-center justify-center space-x-6'>

                <Image src='/apple_tv_app_icon__cth1s5qlqpyu_xlarge_2x.png' alt='appleTv' width={90} height={90} />

                <Container className='justify-center flex text-center flex-col space-y-10 pt-36 '>

                    <h1 className='md:text-5xl text-2xl  font-bold text-center'>
                        Watch Apple TV+ anywhere
                        on the Apple TV app.
                    </h1>
                    <div className='max-w-[500px] mx-auto'>
                        <p className='text-center'>
                            Find the Apple TV app on your favorite Apple devices.
                            Or watch Apple TV+ online at <Link className='text-textLink' href='tv.apple.com/eg'>tv.apple.com/eg.</Link>
                        </p>
                    </div>

                    <motion.div
                        className='flex justify-between  flex-wrap md:flex-nowrap  md:gap-20 gap-10'
                        ref={IconsContentRef}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {contentIcons.map((cont, i) => (
                            <motion.div
                                className='list-none justify-center size-24 md:size-50'
                                key={i}
                                variants={itemVariants}
                            >
                                <Image src={cont.icon} width={150} height={150} alt={`${i}-${cont.title}`} />
                                <h4>{cont.title}</h4>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className='max-w-[500px] mx-auto pt-10 '>
                        <h3 className='text-4xl mb-4 font-semibold'>
                            See it on your smart TV or streaming device.
                        </h3>
                        <Link className='text-textLink' href={'Set up your device'}>Set up your device &gt; </Link>
                    </div>

                    <div>
                        <Image src='/Screenshot 2024-05-20 084932.png' width={1300} height={1300} alt='screen' />
                    </div>
                    <Accordions />
                </Container>
            </section>
        </Container>
    )
}
