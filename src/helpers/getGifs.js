const GIF_TOKEN = import.meta.env.VITE_GIF_TOKEN;

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=9&api_key=${GIF_TOKEN}`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data?.map(({ id, title, images }) => {
        const { url } = images.downsized_medium;
        return { id, title, url };
    });
    return gifs;
};