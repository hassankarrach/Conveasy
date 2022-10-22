import React, { useState, useEffect, useRef } from "react";
import { UseSockets } from "contexts/Socket.Context";

import { Video } from "./Video.Styled";
//Icons
import PushPinIcon from "@mui/icons-material/PushPin";
import PersonIcon from "@mui/icons-material/Person";

function index() {
  //SocetContext
  const { users, name } = UseSockets();

  const [Stream, setStream] = useState(null);

  //CallStates
  const [CallAccepted, setCallAccepted] = useState(false);
  const [CallEnded, setCallEnded] = useState(false);

  return (
    <Video>
      <div className="MainVideo">
        <span>no camera found</span>
        <div className="PainedIcon">
          <PushPinIcon />
        </div>
        <div className="UserName">
          <PersonIcon />
          You
        </div>
      </div>
      <div className="UserVideos">
        {users.map((user) => {
          return (
            <div className="UserVideo">
              <div
                className="Bg"
                style={{
                  backgroundImage: `url(./Assets/Faces/${user.avatar}.png)`,
                }}
              ></div>

              <div
                className="Avatar"
                style={{
                  backgroundImage: `url(./Assets/Faces/${user.avatar}.png)`,
                }}
              ></div>
              <div className="Name">
                <span>{user.name === name ? "You" : user.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Video>
  );
}

export default index;
