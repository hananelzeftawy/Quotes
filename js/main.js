var quoteOutput = document.getElementById('quoteOutput');
var authorOutput = document.getElementById('authorOutput');

var quotesContainer = [];
function addQuote(){
    var quote = {
        content: quoteOutput,
        author: authorOutput,
    }

    quotesContainer.push(quote);
    displayQuote();
    clearQuote();
}
function clearQuote(){
    quoteOutput = " ";
    authorOutput = " ";
}
function displayQuote(){
    var cartoona= ``;
    for (var i=0; i<quotesContainer.length;i++)
    {
        cartoona+= `
        ${quotesContainer[i].content}
        ${quotesContainer[i].author}
        `

    }
}


// Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}


