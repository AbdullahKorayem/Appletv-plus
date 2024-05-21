
import { navLists } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from './Container'
import Button from './Button'

export default function Header() {

    return (
        <>
            <header className=' bg-backGroundContrast text-white'>
                <Container className='flex items-center min-h-11'>

                    <Link href='/' className='flex h-[--header-row-height] items-center px-6 -ml-6 '>
                        <Image src='/apple.svg' width={15} height={18} alt='apple logo' />
                    </Link>

                    <div className='flex flex-1 justify-center max-sm:hidden '>
                        {navLists.map(item => (<div className='px-3 text-xs cursor-pointer text-white hover:text-textHover transition-all duration-200' key={item}>{item}</div>))}
                    </div>

                    <div className='flex items-baseline gap-4 max-sm:justify-end max-sm:flex-1'>
                        <Image src='/search.svg' width={16} height={16} alt='search' />
                        <Image src='/bag.svg' width={16} height={16} alt='bag' />
                    </div>

                </Container>


            </header>
            <div className='sticky top-0 bg-backGroundContrast z-20 text-white'>
                <Container className='flex items-center min-h-11 justify-between'>
                    <p className='text-xl font-semibold font-sans '>
                        Apple TV+
                    </p>
                    <Button size='small'>Stream Now</Button>
                </Container>
            </div>
        </>
    )
}


