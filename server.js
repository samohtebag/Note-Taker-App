
// setting up the dependencies

const express = require ('express');

const path = require('path');


// setting up the express app

const app = express();

const PORT = process.env.PORT || 8000;

// setting up data parsing with the express app

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(express.static("public"));


// setting up the routes

require('./routes/apiroute')(app);

require('./routes/htmlroute')(app);


// app listener

app.listen(PORT, () => function() {

    console.log("App listening on PORT: " + PORT);

});