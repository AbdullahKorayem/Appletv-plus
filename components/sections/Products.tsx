import React from "react";
import Container from "../Container";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

export default function Products() {
    return (
        <>
            <Container className="max-w-[1400px] mt-40">
                <div className="flex gap-10 flex-col-reverse md:flex-row justify-around bg-[#f5f5f7] p-20 items-center">
                    <div className="grid grid-cols-2 gap-5 ">
                    
                            <Image
                                src="/Apple_Music_icon.svg"
                                width={150}
                                height={150}
                                alt="products"
                            />
                       
                    
                            <Image
                                src="/AppleTVLogo.svg"
                                width={150}
                                height={150}
                                alt="products"
                            />
                       
                       
                            <Image
                                src="/facetime-ios-icon.svg"
                                width={150}
                                height={150}
                                alt="products"
                            />
                            <Image className="self-center"
                                src="/ICloud_logo.svg"
                                width={170}
                                height={170}
                                alt="products"
                            />
                    </div>

                    <section className="text-center max-w-[500px] ">
                        <h1 className="font-semibold text-2xl flex flex-row justify-center">
                            <span className="mt-2 mr-1">
                                <Image
                                    src="/Apple_logo_black.svg"
                                    width={20}
                                    className="invert-0"
                                    height={20}
                                    alt="apple"
                                />
                            </span>{" "}
                            One
                        </h1>
                        <h1 className=" font-bold text-2xl">
                            Bundle Apple TV+ with three other great services.
                            And enjoy more for less.
                        </h1>
                        <Button className="bg-backGround hover:bg-textBlack font-bold text-l text-white mt-20">
                            Try Apple One Free
                        </Button>
                        <div className="mt-8 ">
                            <Link href="/" className="text-textLink ">
                                Learn more &gt;
                            </Link>
                        </div>
                    </section>
                </div>
            </Container>
            {/* -------------------- */}
            <Container className="max-w-[1400px] mt-40">
                <div className="flex justify-between gap-10 bg-[#f5f5f7] p-20 flex-col mx-auto md:flex-row">
                    <section className="text-center max-w-[500px] p-5 flex flex-col  ">
                        <h1 className="font-semibold md:text-3xl text-2xl ">
                            The Apple Music Student Plan comes with Apple TV+
                            for free.4
                        </h1>
                        <Button className="bg-backGround hover:bg-textBlack font-bold  text-white mt-20 w-fit self-center">
                            Try Apple Music Free
                        </Button>
                    </section>

                    <div className="flex justify-end items-center   mt-20  ">
                        <Image className="object-fit "
                        layout="cover"
                            src="/Screenshot 2024-05-20 210148.png"
                            width={920}
                            height={920}
                            alt="products"
                        />
                    </div>
                </div>
                {/* ------------------ */}

                <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-12 ">
                    <div className="bg-[#f5f5f7] p-10">
                        <section className="text-center md:max-w-[500px] ">
                            <h1 className="font-semibold text-2xl  md:4xl flex flex-row justify-center">
                                <span className="mt-2 mr-1">
                                    <Image
                                        src="/Apple_logo_black.svg"
                                        width={20}
                                        className="invert-0"
                                        height={20}
                                        alt="apple"
                                    />
                                </span>
                                One 4K TV
                            </h1>

                            <h1 className="font-semibold text-2xl mt-16 md:text-4xl">
                                Bring Apple TV+ to a screen near you.
                            </h1>
                            <div className="flex justify-around mt-10">
                                <Button className="bg-[#0077ed] font-bold text-l text-white">
                                    Buy
                                </Button>

                                <Link href="/" className="text-textLink">
                                    Learn more &gt;
                                </Link>
                            </div>
                        </section>
                        <div className="flex justify-end items-center md:w-[520px]">
                            <Image
                                src="/apple-tv-4k-hero-select-202210-removebg-preview.png"
                                width={520}
                                height={520}
                                alt="products"
                            />
                        </div>
                    </div>

                    <div className="bg-[#f5f5f7] p-10 ">
                        <section className="text-center  space-y-10">
                            <h1 className="font-semibold md:text-4xl text-2xl">
                                Air Play
                            </h1>
                            <h1 className="font-semibold md:text-3xl mt-16 text-2xl ">
                                The Apple experience. Cinematic in every sense.
                            </h1>
                            <Link href="/" className="text-textLink">
                                Learn more &gt;
                            </Link>
                        </section>
                        <div className="flex justify-end items-center mt-10 ">
                            <Image
                                src="/Screenshot 2024-05-20 213828.png"
                                width={520}
                                height={520}
                                alt="products"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
