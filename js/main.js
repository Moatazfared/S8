let quoteItem = [ 
{lisQuote : "“Be yourself; everyone else is already taken.”",nameQuote : "― Oscar Wilde"},
{lisQuote : "“So many books, so little time.”",nameQuote : "― Frank Zappa"},
{lisQuote : "“A room without books is like a body without a soul.”", nameQuote : "― Marcus Tullius Cicero"},
{lisQuote : "“You only live once, but if you do it right, once is enough.”", nameQuote : "― Mae West"},
{lisQuote : "“Be the change that you wish to see in the world.”", nameQuote : "― Mahatma Gandhi"},
{lisQuote : "“If you tell the truth, you don't have to remember anything.”", nameQuote : "― Mark Twain"},
{lisQuote : "“A friend is someone who knows all about you and still loves you.”", nameQuote : "― Elbert Hubbard"},
{lisQuote : "“Always forgive your enemies; nothing annoys them so much.”", nameQuote : "― Oscar Wilde"}
]


function generateQuote(){
    let randomNumber = Math.floor(Math.random() * quoteItem.length) 
    document.getElementById("quoteOutput").innerHTML = quoteItem[randomNumber].lisQuote
    document.getElementById("authorOutput").innerHTML = quoteItem[randomNumber].nameQuote

}


