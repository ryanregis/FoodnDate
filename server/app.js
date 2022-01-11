const express = require("express");
const path = require('path');
const app = express();

const server = require("http").createServer(app);
const cors = require("cors"); //for cross origin
const io = require("socket.io")(server, {
    cors: {
        origin: "*", //allow access on all origin
        methods: ["GET", "POST"] //array of two strings
    }
});
app.use(cors());

//for socket.io, socket for real time data transmission, messages, video or audio
io.on('connection', (socket) => {
    socket.emit('me', socket.id);

    socket.on('disconnect', () => {
        socket.broadcast.emit("callEnded");
    });

    socket.on("callUser", ({userToCall, signalData, from, name}) => {
        io.to(userToCall).emit("callUser", {signal: signalData, from, name});
    });

    socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal);
    })
});

app.post("/api", (req, res) => {
    console.log("Connected to React!!!");
    res.redirect("/");
});

const PORT = process.env.PORT || 5000;
// const buildPath = path.join(__dirname, '../client/dist');
// app.use(express.static(buildPath));

server.listen(PORT, console.log(`Server started on port ${PORT}.`));