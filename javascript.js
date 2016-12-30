function randomQuote() {
    //--- this portion stores the quotes ---//
    var quoteArray = [
        {quote: "quote 0", author: "person 0"},
        {quote: "quote 1", author: "person 1"},
        {quote: "quote 2", author: "person 2"},
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