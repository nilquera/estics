const apiKey = "pHPA5snwQtXPyDs1V37sm71z4CP7PI6R";

export default function getGifs({ keyword = "taxipictures" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const url = images.downsized_medium.url;
        return { title, id, url };
      });
      return gifs;
    });
}
