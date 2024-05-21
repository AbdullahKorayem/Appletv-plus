
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMeasure } from 'react-use';
import Card from '../Card';
import { Movie } from '@/constants/Typings';


export default function SmallCarousel({ movies }: { movies: Movie[] }) {

    const Fast_Duration = 190;
    const Slow_Duration = 230;

    const [duration, setDuration] = useState(Fast_Duration);
    const [isFinished, setIsFinished] = useState(true); 
    const [reRender, setRerender] = useState(false);

    let [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 8;

        if (isFinished) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: "linear",
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setIsFinished(false);
                    setRerender(!reRender);
                },
            });
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
            });
        }

        return controls?.stop;
    }, [xTranslation, width, duration, isFinished, reRender]);

    return (
        <main className="py-8">
            <div className='relative h-44'>
                <motion.div
                    whileHover={{ transition: { duration: 5 } }}
                    transition={{
                        duration: 2, // duration time when mouse leaves the element
                    }}
                    style={{ x: xTranslation }}
                    onHoverStart={() => {
                        setIsFinished(true);
                        setDuration(Slow_Duration);
                    }}
                    onHoverEnd={() => {
                        setIsFinished(true);
                        setDuration(Fast_Duration);
                    }}
                    className=" absolute left-0 flex gap-5 overflow-clip "
                    ref={ref}
                >
                    {movies.map((movie, i) => (
                        <Card movie={movie} key={i} />
                    ))}
                </motion.div>
            </div>
        </main>
    );
}