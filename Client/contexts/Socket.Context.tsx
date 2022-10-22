import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import io, { Socket } from "socket.io-client";
import { SOCKET_URL } from "../config/default";

interface Message {
  user: string;
  text: string;
  time?: string;
}
interface Context {
  socket: Socket;
  name: string;
  room: string;
  user: any;
  users: any[];
  mic: boolean;
  Video_: boolean;
  ShareScreen: boolean;
  WhiteBoard_: boolean;
  chatVideo: boolean;
  ChatContainerShow: boolean;
  message: string;
  messages: Message[];
  setName: Function;
  setRoom: Function;
  setUsers: Function;
  setMessage: Function;
  setMessages: Function;
  setMic: Function;
  setVideo: Function;
  setShareScreen: Function;
  setWhiteBoard: Function;
  setchatVideo: Function;
  setChatContainerShow: Function;
}

const socket = io(SOCKET_URL, {
  transports: ["websocket", "polling", "flashsocket"],
});

const SocketContext = createContext<Context>({
  socket,
  name: "",
  room: "",
  user: {},
  users: [],
  message: "",
  messages: [],
  mic: false,
  Video_: false,
  ShareScreen: false,
  WhiteBoard_: false,
  chatVideo: false,
  ChatContainerShow: false,
  setName: () => false,
  setRoom: () => false,
  setUsers: () => false,
  setMessage: () => false,
  setMessages: () => false,
  setMic: () => false,
  setVideo: () => false,
  setchatVideo: () => false,
  setShareScreen: () => false,
  setWhiteBoard: () => false,
  setChatContainerShow: () => false,
});

const SocketsProvider = (props: any) => {
  //GlobalStates
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [user, setUser] = useState<Object>({});
  const [users, setUsers] = useState<object[]>([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<object[]>([]);

  //VideCallStates
  const [mic, setMic] = useState(true);
  const [Video_, setVideo] = useState(true);
  const [ShareScreen, setShareScreen] = useState(false);
  const [WhiteBoard_, setWhiteBoard] = useState(false);
  const [chatVideo, setchatVideo] = useState(true);
  const [ChatContainerShow, setChatContainerShow] = useState(true);

  //HandleMessages
  useEffect(() => {
    const eventListener = (message: any) => {
      const MsgRecieved = new Audio("/Assets/Sounds/MsgRecieved.mp3");
      const MsgSent = new Audio("/Assets/Sounds/MsgSent.mp3");

      console.log(message);
      if (message.user != name) {
        MsgRecieved.play();
      } else {
        MsgSent.play();
      }
      setMessages([...messages, message]);
    };
    socket.on("message", eventListener);

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    socket.on("user", (user) => {
      setUser(user);
    });

    return () => {
      socket.off("message");
    };
  }, [messages, users]);

  //Detect If User On Mobile
  useEffect(() => {
    var hasTouchScreen = false;
    if ("maxTouchPoints" in navigator) {
      hasTouchScreen = navigator.maxTouchPoints > 0;
    }
    if (hasTouchScreen) {
      setchatVideo(false);
    } else {
      setchatVideo(true);
    }
  }, []);

  //HandleJoin
  //   useEffect(() => {
  //   socket.emit("join", { name, room }, (error: any) => {
  //     if (error) {
  //       alert(error);
  //     }
  //   });
  //   return () => {
  //     socket.emit("disconnect");
  //     socket.off();
  //   };
  // }, [name, room]);

  return (
    <SocketContext.Provider
      value={{
        socket,
        name,
        room,
        user,
        users,
        message,
        messages,
        mic,
        Video_,
        ShareScreen,
        WhiteBoard_,
        chatVideo,
        ChatContainerShow,
        setMic,
        setVideo,
        setShareScreen,
        setWhiteBoard,
        setchatVideo,
        setName,
        setRoom,
        setUsers,
        setMessage,
        setMessages,
        setChatContainerShow,
      }}
      {...props}
    />
  );
};

export const UseSockets = () => useContext(SocketContext);
export default SocketsProvider;
