'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Movie } from '@/constants/Typings';
import getImagePath from '@/lib/imagePath';
interface CardProps {
  movie: Movie; key?: number; }


export default function Card({ movie,key }: CardProps) {

    const [showOverlay, setShowOverlay] = useState(false)
    return (
        <motion.div
            onHoverStart={() => setShowOverlay(true)}
            onHoverEnd={() => setShowOverlay(false)} className='relative overflow-clip shrink-0 bg-slate-200 rounded-xl flex justify-center items-center md:w-[40vh] w-[40vw] md:aspect-video '>
            <AnimatePresence>
                {showOverlay && (
                    <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.45 } }}
                        exit={{ opacity: 0 }}
                        className=' absolute inset-0 z-10 flex justify-center items-center ' >
                        <div className=' absolute bg-backGroundContrast pointer-events-none opacity-50  h-full w-full' />
                        <motion.h1 initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            exit={{ y: 10 }} className=' bg-white font-semibold text-sm px-3 z-10 rounded-full flex gap-[0.5ch] hover:opacity-75  py-2'>
                            <span>Explore Now</span>
                            <Image src='/arrow.svg' width={20} alt='arrow' height={20} />
                        </motion.h1>
                    </motion.div>)}
            </AnimatePresence>
            <Image src={getImagePath(movie.poster_path)} alt={movie.title} className='w-full h-full object-cover' fill layout='object-fit' />
        </motion.div>
    )
}

