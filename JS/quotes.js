const quotes = [
  {
    quote:
      "The more you sweat in times of peace, the less you bleed in times of war.",
    author: "must be someone",
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "You cannot shake hands with a clenched fist.",
    author: "Indira Gandhi",
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    author: "John F. Kennedy",
  },
  {
    quote: "There is no charm equal to tenderness of heart.",
    author: "Jane Austen",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "If you’re going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    quote: "I came, I saw, I conquered.",
    author: "Julius Caesar",
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    author: "Mark Twain",
  },
  {
    quote:
      "Life is like a box of chocolates. You never know what you’re going to get.",
    author: "Forrest Gump",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

// console.log(quotes[0]);

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
// console.log(randomQuote);

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
