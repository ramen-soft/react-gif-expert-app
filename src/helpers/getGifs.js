export const getGifs = async (category)=>{
    const API_KEY = '9Bsoetp4SA7TGKHwKBG0lUNToKJ4gcAK';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}