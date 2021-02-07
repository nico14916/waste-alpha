"use strict";
require('dotenv').config();
process.env.PORT = process.env.PORT || 3000;
process.env.PRIVATE_KEY = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');
process.env.PUBLIC_KEY = process.env.PUBLIC_KEY.replace(/\\n/g, '\n');

require('./init')();
const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('cors')());
app.disable('x-powered-by');
app.use(function(err, req, res, next) {
    if(err.status){
        return res.sendStatus(err.status);
    }
    return res.sendStatus(500);
});

app.use(require('./routes'));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});