const express = require("express");
const helloRoute = require('./routes/hello');
const app = express();


app.use(express.static('public'));
app.use('/hello', helloRoute);

app.listen(3000, () => console.log('Example app listening on port 3000!'));