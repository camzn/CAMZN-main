const express = require("express");
const path = require("path");
const app = express();
const PORT = 1111;

app.use(express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, function() {
    console.log(`Connect Successfully: ${PORT}`);
})