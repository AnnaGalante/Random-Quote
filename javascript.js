function randomQuote() {
    var quoteArray = ["item 0", "item1", "item2", "item3", "item4"];
    var random = quoteArray[Math.floor(Math.random() * quoteArray.length)]; //not round, use floor because lol 0 based indexing
    document.getElementById("quote").innerHTML = random; //this part I don't understand yet
}