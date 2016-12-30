function randomQuote() {
    //--- this portion stores the quotes ---//
    var quoteArray = [
        {quote: "“There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man.”", author: "Patrick Rothfuss"},
        {quote: "“There’s no freedom quite like the freedom of being constantly underestimated.” ", author: "Scott Lynch"},
        {quote: "“Bones mend. Regret stays with you forever.” ", author: "Patrick Rothfuss"},
        {quote: "quote 3", author: "person 3"},
        {quote: "quote 4", author: "person 4"}
    ];
    
    //--- this portion Generates the random values ---//
    var randomNumber = Math.floor(Math.random() * quoteArray.length); //generatesrandom number
    
    var sameQuote = quoteArray[randomNumber].quote; 
    
    var sameAuthor = quoteArray[randomNumber].author;
    
    //--- this portion pops the quote into the HTML ---//
    document.getElementById("quote").textContent = sameQuote; 
    document.getElementById("author").textContent = sameAuthor;
}