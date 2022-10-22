const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());
const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./utils/users");

app.get("/", (req, res) => {
  res.json({ text: "server is Runing." });
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://conveasy-client.vercel.app/",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  //OnJoin
  socket.on("join", ({ name, room, gender }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room, gender });
    if (error) return callback(error);
    // Emit will send message to the user
    // who had joined
    socket.emit("message", {
      user: "admin",
      text: `${user.name},
			welcome to room ${user.room}.`,
    });

    // Broadcast will send message to everyone
    // in the room except the joined user
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name}, has joined` });
    socket.join(user.room);

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });
    callback();
  });

  //VideoCall Option
  socket.on("action", (msg) => {
    if (msg == "mute") micSocket[socket.id] = "off";
    else if (msg == "unmute") micSocket[socket.id] = "on";
    else if (msg == "videoon") videoSocket[socket.id] = "on";
    else if (msg == "videooff") videoSocket[socket.id] = "off";

    socket.to(socketroom[socket.id]).emit("action", msg, socket.id);
  });
  //Call
  socket.on("video-offer", (offer, sid) => {
    socket
      .to(sid)
      .emit(
        "video-offer",
        offer,
        socket.id,
        socketname[socket.id],
        micSocket[socket.id],
        videoSocket[socket.id]
      );
  });
  //AnswareCall
  socket.on("video-answer", (answer, sid) => {
    socket.to(sid).emit("video-answer", answer, socket.id);
  });

  socket.on("sendMessage", (MsgObj, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", {
      user: user.name,
      text: MsgObj.msg,
      time: MsgObj.time,
    });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });
    callback();
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected!");

    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} left`,
      });

      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

server.listen(process.env.PORT || 3001, () =>
  console.log(`Server has started.`)
);
