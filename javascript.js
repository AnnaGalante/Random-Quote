function randomQuote() {
    var quoteArray = ["item 0", "item1", "item2", "item3", "item4"];
    var random = quoteArray[Math.floor(Math.random() * quoteArray.length)]; //not round, use floor because lol 0 based indexing
    document.getElementById("quote").textContent = random; //90% sure this is where the problem is
}