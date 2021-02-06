"use strict";
require('dotenv').config();
process.env.PRIVATE_KEY = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');
process.env.PUBLIC_KEY = process.env.PUBLIC_KEY.replace(/\\n/g, '\n');

require('./init')();
const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');
app.use(function(err, req, res, next) {
    if(err.status){
        return res.sendStatus(err.status);
    }
    return res.sendStatus(500);
});

app.use(require('./routes'));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});