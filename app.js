const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/api", (req, res) => {
    console.log("Connected to React!!!");
    res.redirect("/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));