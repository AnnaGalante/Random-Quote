function randomQuote() {
    //--- Quotes ---//
    var quoteArray = [
        {quote: "There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man.", author: "Patrick Rothfuss"},
        {quote: "There’s no freedom quite like the freedom of being constantly underestimated. ", author: "Scott Lynch"},
        {quote: "Bones mend. Regret stays with you forever. ", author: "Patrick Rothfuss"},
        {quote: "Adventure may hurt you but monotony will kill you", author: "Unkown"},
        {quote: "The mountains are calling and I must go.", author: "John Muir"},
        {quote: "There is nothing worse than a sharp image of a fuzzy concept.", author: "Ansel Adams"},
        {quote: "The woods are lovely, dark and deep. But I have promises to keep, and miles to go before I sleep.", author: "Robert Frost"},
        {quote: "Insufficient data for meaningful answer", author: "Isaac Asimov"},
        {quote: "If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?", author: "Albert Einstein"},
        {quote: "Supreme executive power should be derived by a mandate from the masses not from some farcical aquatic ceremony!", author: "Monty Python and The Holy Grail"},
        {quote: "Nerf this!", author: "D.Va"},
        {quote: "Heroes Never Die!", author: "Mercy"},
        {quote: "Many that live deserve death. And some die that deserve life. Can you give it to them?", author: "Gandalf"},
        {quote: "Pride is not the opposite of shame, but its source. True humility is the only antidote for shame.", author: "Iroh"},
        {quote: "Tempest Keep was merely a setback!", author: "Kael'thas Sunstrider"},
        {quote: "If I had asked people what they wanted they would have said faster horses.", author: "Henry Ford"},
    ];
    
    //---Generates the random values ---//
    var randomNumber = Math.floor(Math.random() * quoteArray.length); //generatesrandom number
    var sameQuote = quoteArray[randomNumber].quote;    
    var sameAuthor = quoteArray[randomNumber].author;
    
    //--- Popping the quote into the HTML ---//
    document.getElementById("quote").textContent = sameQuote;
    document.getElementById("author").textContent = sameAuthor;
    
};

//-- Generates tweet URL --//
   
//function tweetQuote(){
 //var tweetURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.getElementById("quote").textContent) + " -" + encodeURIComponent(document.getElementById("author").textContent) + "?via=Anna_Bandit?hashtags=FCC";
 //document.getElementById("twitter-button").setAttribute("href", tweetURL);
//};

function tweetQuoteButton(){
    var test = "loremipsum"
    var tweetURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.getElementById("quote").textContent) + " -" + encodeURIComponent(document.getElementById("author").textContent);
 document.getElementById("tweetButton").setAttribute("data-text", test);
};






