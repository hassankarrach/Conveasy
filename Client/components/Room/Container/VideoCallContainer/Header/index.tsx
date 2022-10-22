import React from "react";
import { StyledMember, JoinedPeople } from "./members.styled";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
//Context
import { UseSockets } from "contexts/Socket.Context";

//MaterialUiAvatar
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatIcon from "@mui/icons-material/Chat";

function index() {
  //SocetContext
  const {
    users,
    WhiteBoard_,
    chatVideo,
    setWhiteBoard,
    setchatVideo,
    ChatContainerShow,
    setChatContainerShow,
  } = UseSockets();

  const HandleWhiteBoardState = () => {
    if (!WhiteBoard_) {
      setWhiteBoard(true);
      setchatVideo(false);
      setChatContainerShow(false);
    }
  };
  const HandlechatVideoState = () => {
    if (!chatVideo) {
      setchatVideo(true);
      setWhiteBoard(false);
      setChatContainerShow(false);
    }
  };

  const HandleShowChatBox = () => {
    if (!ChatContainerShow) {
      setchatVideo(false);
      setWhiteBoard(false);
      setChatContainerShow(true);
    }
  };

  return (
    <StyledMember>
      <div className="RoomData">
        <QuestionAnswerIcon className="Room" />
        <h1>UI Meeting Weekly - Week 1</h1>
      </div>

      <JoinedPeople>
        <AvatarGroup max={4} className={"AvatarGroup"}>
          {users.map((user, key) => {
            return (
              <Avatar
                key={key}
                alt={user.name}
                src={`./Assets/Faces/${user.avatar}.png`}
              />
            );
          })}
        </AvatarGroup>
        <h3 className="Title">
          <span style={{ fontWeight: "bold" }}>{users.length}</span> People
          Joined
        </h3>
      </JoinedPeople>

      <div className="PhoneControlls">
        <div
          className={`El ${chatVideo ? "Actif" : ""}`}
          onClick={() => {
            HandlechatVideoState();
          }}
        >
          <GroupsIcon className="Icon" />
        </div>

        <div
          className={`El ${WhiteBoard_ ? "Actif" : ""}`}
          onClick={() => {
            HandleWhiteBoardState();
          }}
        >
          <NoteAltIcon className="Icon" />
        </div>

        <div
          className={`El ${ChatContainerShow ? "Actif" : ""}`}
          onClick={() => {
            HandleShowChatBox();
          }}
        >
          <ChatIcon className="Icon" />
        </div>
      </div>
    </StyledMember>
  );
}

export default index;
