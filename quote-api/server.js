const express = require('express');
const app = express();

const {quotes} = require('./data');
const {getRandomElement} = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})

app.get('/api/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.send({quote: randomQuote})

})
app.get('/api/quotes/', (req, res, next) => {
    const person = req.query.person;
    if (person) {
        res.send({quotes: quotes.filter(quote => quote.person === person)})
    } else {
        res.send({quotes: quotes})
    }
})

app.post('/api/quotes', (req, res, next) => {
    const quote = req.query.quote;
    const person = req.query.person;
    if (quote && person) {
        let quoteToAdd = {quote: quote, person: person};
        quotes.push(quoteToAdd)
        res.send({quote: quoteToAdd})
    } else {
        res.status(400).send()
    }
})
