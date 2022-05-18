const images = ["1.png", "2.jpeg", "3.png", "4.png", "5.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
console.log(bgImage);

bgImage.src = `IMG/${chosenImage}`;

document.body.appendChild(bgImage);
