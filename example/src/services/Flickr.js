window.flickrCallback = (data) => {
  console.log(data)
}

export const searchImages = (text) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=flickrCallback&tags=london&tagmode=any&format=json'
    document.head.appendChild(script);
  })
}

export default {
  searchImages,
}
