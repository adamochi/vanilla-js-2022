const images = [
  "St Joseph Pier Lighthouse Michigan.jpg",
  "hs.jpg",
  "giant's causeway.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
// console.log(bgImage);

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
console.dir(document.body.main);
