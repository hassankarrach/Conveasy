import React, { FunctionComponent } from "react";
import { StyledMessage } from "./message.styled";

export interface Message {
  from: string;
  pic: string;
  time: string;
  isCurrentUserTheSender?: Boolean;
  isAdmin: boolean;
  isTyping?: boolean;
  content: string;
}

const index: FunctionComponent<Message> = ({
  from,
  pic,
  time,
  isCurrentUserTheSender,
  content,
  isAdmin,
  isTyping,
}) => {
  return (
    <StyledMessage IsUserSender={isCurrentUserTheSender}>
      {!isAdmin && (
        <div className="ProfilePicture">
          <div
            className="ProfileHolder"
            style={{
              backgroundImage: `url(/Assets/Faces/${
                pic != undefined ? pic : "Missed"
              }.png)`,
            }}
          ></div>
        </div>
      )}

      {isAdmin ? (
        <span className="RobotMsg">{content}</span>
      ) : (
        <div className="MessageData">
          <div className="MessageSender">
            <span className="Sender">
              {isCurrentUserTheSender ? "you" : from}
            </span>
            <div className="Dot"></div>
            <span className="Time">{time}</span>
          </div>

          <div className="Message">{content}</div>
        </div>
      )}
    </StyledMessage>
  );
};

export default index;
