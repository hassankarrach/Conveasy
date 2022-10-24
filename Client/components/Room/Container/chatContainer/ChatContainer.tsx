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
  //SocetContext
  const {
    socket,
    message,
    messages,
    name,
    users,
    setMessage,
    ChatContainerShow,
    setMessages,
  } = UseSockets();

  const [ParticipantsShow, setParticipantsShow] = useState(false);
  const [ChatBoxShow, setChatBoxShow] = useState(true);
  //TypingStats
  const [focused, setFocused] = useState(false);
  const onFocus = () => {
    setFocused(true);
    socket.emit("typing", { user: name, status: "typing" });
  };
  const onBlur = () => {
    setFocused(false);
    socket.emit("typing", { user: name, status: "Not typing" });
  };
  const [isTyping, setisTyping] = useState(false);

  //InputRef
  const newMessageRef = useRef<any>(null);
  const messageEndRef = useRef<null | HTMLDivElement>(null); //Empty Div in The End Of the Messages Container for auto scroll to last Message.

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

  //HandleIsTyping
  useEffect(() => {
    socket.on("UserIsTyping", (data) => {
      const { status } = data;
      if (status === "typing") {
        setisTyping(true);
      } else if (status === "Not typing") {
        setisTyping(false);
      }
    });

    return () => {
      socket.removeListener("UserIsTyping");
    };
  }, []);

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
              {users.map((user, key) => {
                return (
                  <div className="Participant" key={key}>
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

                {isTyping && (
                  <div className="TypingComp">
                    <div className="typing">
                      <div className="typing__dot"></div>
                      <div className="typing__dot"></div>
                      <div className="typing__dot"></div>
                    </div>

                    <span>Someone is typing a message...</span>
                  </div>
                )}
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
                  onFocus={onFocus}
                  onBlur={onBlur}
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
