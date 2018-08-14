const express = require("express");
const bodyParser = require('body-parser');
const helloRoute = require('./routes/hello');
const pizzaRoute = require('./routes/pizza');
const logger = require('./middleware/logger');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(logger({name: 'Custom'}));

const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
}
app.use(requestTime);

app.use('/hello', helloRoute);
app.use('/pizza', pizzaRoute);

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!');
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));
