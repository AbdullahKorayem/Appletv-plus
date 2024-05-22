"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Container from "../Container";
import Button from "../Button";
import { useRef } from "react";
import Image from "next/image";
import { Movie } from "@/constants/Typings";
import getImagePath from "@/lib/imagePath";
import { getRandomMovie } from "@/constants/getMovies";

type Props = {
    movies: Movie[];
};

export default function Hero({ movies }: Props) {
    const randomMovie = getRandomMovie(movies);

    const videoContainerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: videoContainerRef,
        offset: ["start start", "end end"],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

    return (
        <div className="bg-background text-white">
            <motion.div
                style={{ opacity }}
                ref={videoContainerRef}
                className="absolute -top-[--header-height] left-0 h-[170vh] min-w-0 flex-[0_0_100%] w-full"
            >
                <Image
                    className="sticky top-0 "
                    src={getImagePath(randomMovie.poster_path)}
                    placeholder="blur"
                
                    blurDataURL={getImagePath(randomMovie.poster_path)}
                    quality={100}
                    alt={randomMovie.title}
                    // fill
                    width={1920}
                    height={1080}
                />
            </motion.div>
            <Container className="relative z-10 h-[--hero-height] pb-7">
                <motion.div
                    className="flex h-[80vh] flex-col items-start justify-end"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    whileInView="visible"
                    exit="hidden"
                    animate="hidden"
                    viewport={{ amount: 0.98 }}
                >
                    <h1 className="mb-10 text-4xl font-bold md:text-5xl">
                        All Apple Originals. <br />
                        Only on Apple TV+.
                    </h1>
                    <Button className="mb-16" size="large">
                        Stream now
                    </Button>
                    <p className="flex items-center font-semibold">
                        Watch on the
                        <span className="mx-2">
                            <Image
                                className="transition-opacity opacity-0 duration-[2s]"
                                src="/apple_tv_app_icon__cth1s5qlqpyu_xlarge_2x.png"
                                width={38}
                                height={38}
                                alt="apple tv"
                                onLoad={(image) => (image.target as HTMLImageElement).classList.remove('opacity-0')}
                            />
                        </span>
                        App.
                    </p>
                </motion.div>
            </Container>
        </div>
    );
}
