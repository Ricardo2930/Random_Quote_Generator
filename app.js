const newQuoteBtn = document.querySelector(".new-quote-btn");

const newQuote = document.querySelector(".quote");
const newAuthor = document.querySelector(".author");

//buttons
const speakBtn = document.querySelector(".speak");
const copyBtn = document.querySelector(".copy");
const copyIcon = document.querySelector(".copy i");
const copyText = document.querySelector(".copy span");

//API - Data
const url = "https://api.quotable.io/random";

//event to show quote
newQuoteBtn.addEventListener("click", () => {
  getQuote();
});

//function to get the api data (quote and author)
const getQuote = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      newQuote.innerHTML = data.content;
      newAuthor.innerHTML = `- ${data.author}`;
    });
};

//event to copy quote
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(newQuote.textContent);
  copyIcon.style.display = "none";
  copyText.style.display = "block";
  setTimeout(() => {
    copyIcon.style.display = "block";
    copyText.style.display = "none";
  }, 400);
});

//event to listen quote
speakBtn.addEventListener("click", () => {
  let speak = new SpeechSynthesisUtterance();
  speak.text = `${newQuote.textContent} by ${newAuthor.textContent}`;
  speechSynthesis.speak(speak);
});

getQuote();
