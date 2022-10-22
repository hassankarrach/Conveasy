import React, { useState, useEffect, useRef } from "react";
import { UseSockets } from "contexts/Socket.Context";
import {
  Chat_Container,
  ChatBox,
  MessagesContainer,
  RightChat,
  Participants,
} from "@components/Room/Container/chatContainer/Container.styled";
import Message from "@components/Room/Container/chatContainer/Message";
import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";
import MicOffIcon from "@mui/icons-material/MicOff";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";

const ChatContainer = () => {
  const [ParticipantsShow, setParticipantsShow] = useState(false);
  const [ChatBoxShow, setChatBoxShow] = useState(true);
  //SocetContext
  const {
    socket,
    message,
    messages,
    name,
    users,
    setMessage,
    ChatContainerShow,
  } = UseSockets();
  //InputRef
  const newMessageRef = useRef<any>(null);
  const messageEndRef = useRef<null | HTMLDivElement>(null);

  //Filling The Message State
  const HandleMsgInput = (event: any) => {
    setMessage(event.target.value);
  };

  //Function for Sending Message
  const sendMessage = (e: any) => {
    e.preventDefault();

    const MsgObj = {
      msg: message,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };

    if (message !== "") {
      socket.emit("sendMessage", MsgObj, () => {
        setMessage("");
        newMessageRef.current.value = "";
      });
    }
  };

  //StayInView
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const GetUserByName = (name: string) => {
    const user = users.find((user) => {
      return user.name === name;
    });
    if (user) {
      return user;
    } else {
      return "";
    }
  };

  //RightContainerHandles
  const HandleChatClick = () => {
    setChatBoxShow(true);
    setParticipantsShow(false);
  };
  const HandleParticipantsClick = () => {
    setChatBoxShow(false);
    setParticipantsShow(true);
  };

  return (
    <RightChat>
      {ChatContainerShow && (
        <Chat_Container>
          <div className="Switch">
            <div
              className={`item Chat ${ChatBoxShow && "Actif"}`}
              onClick={HandleChatClick}
            >
              <ChatIcon className="Icon" />
              <span className="Title">Chat</span>
            </div>

            <div
              className={`item Participants ${ParticipantsShow && "Actif"}`}
              onClick={HandleParticipantsClick}
            >
              <PeopleIcon className="Icon" />
              <span className="Title">Participants ({users.length})</span>
            </div>
          </div>

          {ParticipantsShow && (
            <Participants>
              {users.map((user) => {
                return (
                  <div className="Participant">
                    <div
                      className="Avatar"
                      style={{
                        backgroundImage: `url(./Assets/Faces/${user.avatar}.png)`,
                      }}
                    ></div>
                    <span>{user.name === name ? "you" : user.name}</span>

                    <div className="UserSets">
                      <div className="Icon">
                        <KeyboardVoiceIcon />
                      </div>
                      <div className="Icon">
                        <VideocamOffIcon />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Participants>
          )}

          {ChatBoxShow && (
            <>
              <MessagesContainer>
                {messages.map((msg, key) => {
                  const userName = msg.user;

                  const MsgSender: any = GetUserByName(userName);
                  const avatar: any = MsgSender.avatar;

                  return (
                    <Message
                      key={key}
                      content={msg.text}
                      time={msg.time || ""}
                      from={msg.user || name}
                      isCurrentUserTheSender={msg.user === name ? true : false}
                      isAdmin={msg.user === "admin" ? true : false}
                      pic={avatar}
                    />
                  );
                })}
                <div ref={messageEndRef} />
              </MessagesContainer>

              <ChatBox>
                <input
                  className="Input"
                  placeholder="Type Message Here..."
                  onChange={HandleMsgInput}
                  ref={newMessageRef}
                  onKeyPress={(event) =>
                    event.key === "Enter" ? sendMessage(event) : null
                  }
                />
                <div className="Icon" onClick={sendMessage}>
                  <SendIcon />
                </div>
              </ChatBox>
            </>
          )}
        </Chat_Container>
      )}
    </RightChat>
  );
};

export default ChatContainer;
