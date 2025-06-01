
// Quote Database
var quotesDB = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde"
    },
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author: "― Marilyn Monroe"
    },
    {
        quote: "“So many books, so little time.”",
        author: "― Frank Zappa"
    },
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "― Albert Einstein"
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero"
    },

    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author: "― Bernard M. Baruch"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West"
    },
    {
        quote: "“Be the change that you wish to see in the world.”",
        author: "― Mahatma Gandhi"
    },
    {
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        author: "― Robert Frost"
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        author: "― Mark Twain"
    }
]

// Function to get a random quote index from the quotesDB
function getRandomQuote(length) {
    return Math.ceil(Math.random() * length);
}

// Get references to the changeable HTML elements 
var nextBtn = document.getElementById("quoteButton");
var resetBtn = document.getElementById("resetButton");
var quoteText = document.getElementById("quote");
var authorName = document.getElementById("author");
var infoText = document.getElementById("info");
var counter =document.getElementById("counter");

// Each time the next button is clicked, a random quote is displayed, tottal number of quotes is reduced,
// and if no quotes are left, the "reset" button is shown.
nextBtn.addEventListener("click", function () {
    var randomNumber = getRandomQuote(quotesDB.length - 1);
    var quoteIndex = quotesDB[randomNumber];
    quoteText.style = "visibility: visible;"
    authorName.style = "visibility: visible;"
    quoteText.innerHTML = quoteIndex.quote;
    authorName.innerHTML = quoteIndex.author;
    quotesDB.splice(randomNumber, 1);
    counter.innerHTML = quotesDB.length;
    console.log(`Number of Quotes left: ${quotesDB.length}, Random Number: ${randomNumber}`);
    // If no quotes are left, show the reset button and hide the next button
    if (quotesDB.length === 0) {
        nextBtn.style = "visibility: hidden;"
        resetBtn.style = "visibility: visible;"
        infoText.innerHTML = "No more quotes available today. Click 'Reset' to start over";
        infoText.style = "color : red;"
        // Reset the value of quotesDB, hide the reset button and show the next button
        resetBtn.addEventListener('click', function () {
            quotesDB = [
                {
                    quote: "“Be yourself; everyone else is already taken.”",
                    author: "― Oscar Wilde"
                },
                {
                    quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
                    author: "― Marilyn Monroe"
                },
                {
                    quote: "“So many books, so little time.”",
                    author: "― Frank Zappa"
                },
                {
                    quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
                    author: "― Albert Einstein"
                },
                {
                    quote: "“A room without books is like a body without a soul.”",
                    author: "― Marcus Tullius Cicero"
                },

                {
                    quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
                    author: "― Bernard M. Baruch"
                },
                {
                    quote: "“You only live once, but if you do it right, once is enough.”",
                    author: "― Mae West"
                },
                {
                    quote: "“Be the change that you wish to see in the world.”",
                    author: "― Mahatma Gandhi"
                },
                {
                    quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
                    author: "― Robert Frost"
                },
                {
                    quote: "“If you tell the truth, you don't have to remember anything.”",
                    author: "― Mark Twain"
                }
            ];
            nextBtn.style = "visibility: visible;";
            resetBtn.style = "visibility: hidden;";
            infoText.innerHTML = "Press the button below to receive a random quote!";
            infoText.style = "color : black;"
            quoteText.innerHTML = "";
            authorName.innerHTML = "";
            counter.innerHTML = quotesDB.length;
            console.log(`Number of Quotes after reset: ${quotesDB.length}`);
        });
    }

});