const express = require("express");
const path = require('path');
const app = express();

app.post("/api", (req, res) => {
    console.log("Connected to React!!!");
    res.redirect("/");
});

const PORT = process.env.PORT || 8080;
const buildPath = path.join(__dirname, 'client', 'dist');
app.use(express.static(buildPath));

app.listen(PORT, console.log(`Server started on port ${PORT}`));