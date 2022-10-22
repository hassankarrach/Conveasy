import React, { useState, useEffect } from "react";
import { StyledFooter } from "./footer.styled";
import { useRouter } from "next/router";
//Context
import { UseSockets } from "contexts/Socket.Context";
//MaterialUI
import Tooltip from "@mui/material/Tooltip";
//icons
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import MicOffIcon from "@mui/icons-material/MicOff";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import CallEndIcon from "@mui/icons-material/CallEnd";
import GroupsIcon from "@mui/icons-material/Groups";

const index = () => {
  //SocetContext
  const {
    socket,
    mic,
    Video_,
    WhiteBoard_,
    chatVideo,
    ShareScreen,
    setMic,
    setShareScreen,
    setVideo,
    setWhiteBoard,
    setchatVideo,
  } = UseSockets();
  //SocketContext
  const router = useRouter();

  //Handles
  const HandleMicState = () => {
    if (mic) {
      setMic(false);
    } else {
      setMic(true);
    }
  };
  const HandleVideoState = () => {
    if (Video_) {
      setVideo(false);
    } else {
      setVideo(true);
    }
  };
  const HandleShareScreenState = () => {
    if (ShareScreen) {
      setShareScreen(false);
    } else {
      setShareScreen(true);
    }
  };
  const HandleWhiteBoardState = () => {
    if (!WhiteBoard_) {
      setWhiteBoard(true);
      setchatVideo(false);
    }
  };
  const HandlechatVideoState = () => {
    if (!chatVideo) {
      setchatVideo(true);
      setWhiteBoard(false);
    }
  };
  const HandleDisconnect = (e: any) => {
    socket.disconnect();
    router.push("/").then(() => {
      window.location.reload();
    });
  };
  return (
    <StyledFooter>
      <Tooltip title="Copy Room Id">
        <div className="RoomID">
          <span>GFDS234D</span>
          <div className="Divider"></div>
          <ContentCopyIcon className="CopyIcon" />
        </div>
      </Tooltip>

      <div className="Controls">
        <Tooltip title={`${mic ? "Turn off mic" : "turn on mic"}`}>
          <div
            className={`Item ${mic ? "actif" : ""}`}
            onClick={() => {
              HandleMicState();
            }}
          >
            {mic ? <KeyboardVoiceIcon /> : <MicOffIcon />}
          </div>
        </Tooltip>

        <Tooltip title={`${Video_ ? "Turn off Camera" : "turn on Camera"}`}>
          <div
            className={`Item ${Video_ ? "actif" : ""}`}
            onClick={() => {
              HandleVideoState();
            }}
          >
            {Video_ ? <VideocamIcon /> : <VideocamOffIcon />}
          </div>
        </Tooltip>

        <Tooltip title={"Share Screen"}>
          <div
            className={`Item ${ShareScreen ? "actif" : ""}`}
            onClick={() => {
              HandleShareScreenState();
            }}
          >
            <PresentToAllIcon />
          </div>
        </Tooltip>

        <div className={`Item group`} style={{ color: "grey" }}>
          <Tooltip title={`Group chat video`}>
            <div
              className={`El ${chatVideo ? "Actif" : ""}`}
              onClick={() => {
                HandlechatVideoState();
              }}
            >
              <GroupsIcon />
            </div>
          </Tooltip>

          <Tooltip title={`Collaborative white-board`}>
            <div
              className={`El ${WhiteBoard_ ? "Actif" : ""}`}
              onClick={() => {
                HandleWhiteBoardState();
              }}
            >
              <NoteAltIcon />
            </div>
          </Tooltip>
        </div>
      </div>

      <div className="Leave" onClick={HandleDisconnect}>
        <CallEndIcon className="CallEndIcon" />
        <span>Leave</span>
      </div>
    </StyledFooter>
  );
};

export default index;
