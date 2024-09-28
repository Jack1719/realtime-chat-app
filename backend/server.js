const express = require("express");
const cors = require('cors');
const http = require("http");
const { Server } = require("socket.io");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // The URL where your frontend is running
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
  },
});

io.on("connection", (socket) => {
  console.log("A user connected: ", socket.id);

  socket.on("sendMessage", (message) => {
    io.emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
