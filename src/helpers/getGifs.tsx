import axios from "axios"

export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=plwkfiLXaYXhztqhQECqBxB47HNCQEHf`;
    const resp = await axios(url)
    const {data} = await resp.data;
    const gifs = data.map(
        ({
             id,
             title,
             images} : {
            id : string,
            title: string,
            images: { downsized_medium: { url: string }}}) => {
            return {id, title, url: images?.downsized_medium.url}
        })
   return gifs;
}

