import { Movie, SearchResult } from "./Typings"

async function fetchFromTMDB(url: URL, cacheTime?: number) {
    url.searchParams.set("include_adult", "false")
    // url.searchParams.set("include_video", "false")
    url.searchParams.set("language", "en-US")
    url.searchParams.set("page", "1")
    url.searchParams.set("sort_by", "popularity.desc")
    url.searchParams.set("video", "true")

    const options = {
        method: "GET",
        headers: {
            accept: "applications/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        next: {
            revalidate: 60 * 60 * 24
        }
    }

    const response = await fetch(url.toString(), options)
    const data = (await response.json()) as SearchResult

    return data
}


export async function getUpComingMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/upcoming")

    const data = await fetchFromTMDB(url)

    return data.results
}

export async function getTopRatedMovies() {

    const url = new URL("https://api.themoviedb.org/3/movie/top_rated")

    const data = await fetchFromTMDB(url)
    return data.results

}

export async function getPopularMovies() {

    const url = new URL("https://api.themoviedb.org/3/movie/popular")
    const data = await fetchFromTMDB(url)
    return data.results
}

export async function getPopularTv() {

    const url = new URL("https://api.themoviedb.org/3/tv/popular")
    const data = await fetchFromTMDB(url)
    return data.results
}
export async function getTopRatedTv() {

    const url = new URL("https://api.themoviedb.org/3/tv/top_rated")
    const data = await fetchFromTMDB(url)
    return data.results
}



export function getRandomMovie(movies: Movie[]) {
    const arrayLength = movies.length;
    const randomIndex = Math.floor(Math.random() * arrayLength);
    return movies[randomIndex];
}
