
const getImagePath = (imagePath?: string, fullSize?: boolean) => {
    return imagePath
        ? `http://image.tmdb.org/t/p/original/${imagePath}`
        : "https://links.papreact.com/o8z"
}

export default getImagePath