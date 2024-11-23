// Init Framework
const express = require("express");
const app = express();
const PATH = require("path");

const Address = 1234;

// Routes
app.get("/", (req, res) => {
    res.send("Hello world");
})

// Listen
app.listen(Address, () => {
    console.log(`Successful connect Address: ${Address}`);
})