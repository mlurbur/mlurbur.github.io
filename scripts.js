const jsyaml = require('js-yaml');
// console.log("hi");

async function fetchQuotes() {
    const response = await fetch('https://raw.githubusercontent.com/mlurbur/mlurbur.github.io/main/static/quotes.yaml');
    const yamlText = await response.text();
    return jsyaml.load(yamlText);
}

function getRandomQuote(quotesArray) {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
}

function displayRandomQuote(quotes) {
    const randomQuote = getRandomQuote(quotes);
    const quoteText = randomQuote.text;
    const author = randomQuote.author;
    console.log(quoteText)
    console.log(author)
    // document.getElementById("quoteDisplay").textContent = quoteText;
    // document.getElementById("authorDisplay").textContent = "- " + author;
}

const quotes = fetchQuotes();
displayRandomQuote(quotes);

// fetch('https://raw.githubusercontent.com/mlurbur/mlurbur.github.io/main/static/quotes.yaml')
//   .then(res => res.blob())
//   .then(blob => blob.text())
//   .then(yamlAsString => {
//     console.log('yaml res:', yamlAsString)
//   })
//   .catch(err => console.log('yaml err:', err))
