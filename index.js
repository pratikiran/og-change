let images = ['https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ=', 'https://thumbs.dreamstime.com/b/big-lord-shiva-statue-bangalore-18811578.jpg'];

const ogTitle = document.querySelector('meta[property="og:title"]');
const ogImage = document.querySelector('meta[property="og:image"]');
const image = document.querySelector("#og-image");

const ran = parseInt(Math.random() * images.length)
console.log(ran, image);

setTimeout(() => {
    ogTitle.setAttribute('content', 'Lowda');
    image.setAttribute('src', images[ran]);
    ogImage.setAttribute('content', images[ran]);
}, 1000)