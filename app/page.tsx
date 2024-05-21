import Header from "@/components/Header";
import Content from "@/components/sections/Content";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Subscriptions from "@/components/sections/Subscriptions";
import Usps from "@/components/sections/Usps";
import { VideoCarousel } from "@/components/sections/VideoCarousel";
import { getPopularMovies, getPopularTv, getTopRatedMovies, getTopRatedTv, getUpComingMovies } from "@/constants/getMovies";
import arrayShuffle from 'array-shuffle';

export default async function Home() {

    const upComingMovies = await getUpComingMovies()
    const topRatedMovies = await getTopRatedMovies()
    const popularMovies = await getPopularMovies()
    const topRatedTv = await getTopRatedTv()
    const PopularTv = await getPopularTv()

    const Movies = arrayShuffle([...upComingMovies, ...topRatedTv, ...topRatedMovies, ...PopularTv, ...popularMovies])
    return (
        <>
            <Header />
            <main>
                <section className="bg-backGround relative z-10 " >
                    <Hero movies={Movies} />
                    <Usps />
                    <Subscriptions />
                </section>
                <VideoCarousel movies={Movies} />
                <section>
                    <Content />
                    <Products />
                </section>
                <Footer />
            </main>
        </>
    );
}
