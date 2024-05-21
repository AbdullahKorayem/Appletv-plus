import React from 'react'
import Container from '../Container'
import { FooterElements, FooterLinks } from '@/constants'
import Image from 'next/image'


export default function Footer() {
    return (
        <section className='bg-[#f5f5f7] w-full h-full mt-10 text-[#b2b2b3] p-3 text-[12px]'>
            <Container>
                <section className=''>
                    {FooterElements.map((element, i) => (
                        <p key={i + 1} className='text-[#b2b2b3] '>{i}-{element.text}</p>
                    ))}

                </section>

                <section className=' border-t-[.5px] border-textDescription mt-10'>
                    <h5 className=" flex flex-row mt-3 ">
                        <span className=" mr-1">
                            <Image
                                src="/Apple_logo_black.svg"
                                width={12}
                                className="invert-0"
                                height={12}
                                alt="apple"
                            />
                        </span>
                        Apple  	&gt; Apple TV
                    </h5>
                </section>

                <section>
                    <div className="flex justify-around p-10 bg-[#f5f5f7]">
                        {FooterLinks.map((section, index) => (
                            <table key={index} className="min-w-[200px]">
                                <thead>
                                    <tr>
                                        <th className="text-left font-light text-sm">{section.title}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {section.links.map((link, linkIndex) => (
                                        <tr key={linkIndex}>
                                            <td className="py-1 font-light  cursor-pointer"><p className='hover:text-textBlack'>{link}</p></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ))}
                    </div>
                </section>
            </Container>
        </section>
    )
}
Footer
