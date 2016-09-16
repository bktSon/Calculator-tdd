const express = require('express');
const app     = express();

app.use((req, res, next) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if( ! a || ! b || isNaN(a) || isNaN(b)) {
        return res.status(422).end("You must specify two numbers as query params, A and B");
    }
    req.a = a;
    req.b = b;
    return next();
});

app.get('/add', require('./routes/addition'));

app.get('/subtract', require('./routes/subtraction');

app.listen(3000, () => {
    console.log('app is listen');
});

module.exports = app;
