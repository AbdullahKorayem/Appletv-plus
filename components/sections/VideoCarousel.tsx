"use client";
import {
    useScroll,
    useTransform,
    motion,
    useMotionValueEvent,
} from "framer-motion";
import { useMemo, useRef, useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import Button from "./../Button";
import SmallCarousel from "./SmallCarousel";
import { Movie } from "@/constants/Typings";
import Image from "next/image";
import { getRandomMovie } from "@/constants/getMovies";
import getImagePath from "@/lib/imagePath";
import arrayShuffle from 'array-shuffle';


type Props = {
    movies: Movie[];
};

export const VideoCarousel = ({ movies }: Props) => {
    const moviOne = arrayShuffle(movies)
    const moviTwo = arrayShuffle(movies)
    const [randomMovie, setRandomMovie] = useState<Movie | null>();
    const [randomFirst, setRandomFirst] = useState<Movie | null>();
    const [randomLast, setRandomLast] = useState<Movie | null>();

    useEffect(() => {
        setRandomMovie(getRandomMovie(movies));
        setRandomFirst(getRandomMovie(movies));
        setRandomLast(getRandomMovie(movies));
    }, [movies]);

    const { width, height } = useWindowSize();
    const carouselWrapperRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: carouselWrapperRef,
        offset: ["start start", "end start"],
    });

    const maximumScale = useMemo(() => {
        const windowYRatio = height / width;
        const xScale = 1.66667;
        const yScale = xScale * (16 / 9) * windowYRatio;
        return Math.max(xScale, yScale);
    }, [width, height]);

    const scale = useTransform(
        scrollYProgress,
        [0.3, 0.5, 0.66],
        [maximumScale * 1.1, maximumScale, 1]
    );

    const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
    const posterTranslateXLeft = useTransform(
        scrollYProgress,
        [0.64, 0.66],
        [-20, 0]
    );
    const posterTranslateXRight = useTransform(
        scrollYProgress,
        [0.64, 0.66],
        [20, 0]
    );

    const [carouselVariant, setCarouselVariant] = useState<
        "inactive" | "active"
    >("inactive");
    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        if (progress >= 0.67) {
            setCarouselVariant("active");
        } else {
            setCarouselVariant("inactive");
        }
    });

    return (
        <motion.div animate={carouselVariant} className="bg-backGround pb-16 ">
            <div
                ref={carouselWrapperRef}
                className="mt-[-100vh] h-[300vh] overflow-clip"
            >
                <div className="sticky top-0 flex h-screen items-center">
                    <div className="relative left-1/2 mb-5 flex -translate-x-1/2 gap-5">
                        <motion.div
                            style={{
                                opacity: postersOpacity,
                                x: posterTranslateXLeft,
                            }}
                            className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
                        >
                            <Image
                                className="h-full w-full object-cover"
                                src={randomFirst ? getImagePath(randomFirst.poster_path) : ''}
                                alt={"snapshot"}
                                width={1920}
                                height={1080}
                            />
                        </motion.div>
                        <motion.div
                            style={{ scale }}
                            className="relative aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
                        >
                            <Image
                                className="h-full w-full object-cover"
                                src={randomMovie ? getImagePath(randomMovie.poster_path) : ''}
                                alt={randomMovie ? getImagePath(randomMovie.title) : ''}
                                width={1920}
                                height={1080}
                                quality={80}
                            />
                            <motion.div
                                variants={{
                                    active: { opacity: 1 },
                                    inactive: { opacity: 0 },
                                }}
                                className="absolute bottom-0 left-0 flex w-full flex-col items-center gap-4 p-5 text-lg text-white md:flex-row md:justify-between md:gap-0"
                            >
                                <p>{randomMovie?.title}</p>
                                <Button>Watch now</Button>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            style={{
                                opacity: postersOpacity,
                                x: posterTranslateXRight,
                            }}
                            className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
                        >
                            <Image
                                layout="cover"
                                src={randomLast ? getImagePath(randomLast.poster_path) : ''}
                                alt={randomLast ? getImagePath(randomLast.poster_path) : ''}
                                width={1920}
                                height={1080}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>


            <motion.div
                variants={{
                    active: { opacity: 1, y: 0 },
                    inactive: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.4 }}
                className="-mt-[calc((100vh-(300px*(16/9)))/2)] space-y-3 pt-4 md:-mt-[calc((100vh-(60vw*(9/16)))/2)] "
            >
                <div className='overflow-hidden space-y-10 flex flex-col gap-10 h-[700px] md:h-[600px]'>
                    <div style={{ transform: 'translateX(160px)' }}>
                        <SmallCarousel movies={moviOne} />
                    </div>
                    <SmallCarousel movies={moviTwo} />
                </div>
                <div className='w-full flex justify-center items-center pt-5'>

                    <Button size='large' className="bg-transparent border border-1-white hover:border-textBlack text-white">See Full lineup</Button>
                </div>

            </motion.div>


        </motion.div>
    );
};
