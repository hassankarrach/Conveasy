import styled from "styled-components";
import { Message } from ".";

export const StyledMessage = styled.div<{ IsUserSender: Boolean | undefined }>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: ${(prop) => (prop.IsUserSender ? "row-reverse" : "row")};
  font-family: var(--font-primary);
  margin: 15px 0px;
  .RobotMsg {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    color: grey;
  }
  .ProfilePicture {
    height: 80px;
    padding: 6px;
    .ProfileHolder {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-position: center;
      background-size: cover;
    }
  }

  .MessageData {
    padding: 0px 6px;
    background-color: white;
    width: 100%;

    .MessageSender {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: ${(prop) => (prop.IsUserSender ? "row-reverse" : "row")};
      .Sender {
        font-size: 1rem;
        font-weight: 600;
        padding: 5px 0px;
      }
      .Dot {
        width: 3px;
        height: 3px;
        background-color: #bfc0c2;
        border-radius: 50%;
        margin: 0px 10px;
      }
      .Time {
        text-transform: uppercase;
        color: #bfc0c2;
        font-size: 0.8rem;
      }
    }
    .Message {
      display: inline-block;
      max-width: 70%;
      word-wrap: break-word;

      background-color: ${(props) =>
        props.IsUserSender ? "var(--MainColor)" : "#f5f7fb"};
      padding: 10px 15px 10px 8px;
      border-top-left-radius: ${(props) =>
        props.IsUserSender ? "20px" : "4px"};
      border-top-right-radius: ${(props) =>
        props.IsUserSender ? "4px" : "20px"};
      border-bottom-left-radius: ${(props) =>
        props.IsUserSender ? "20px" : "10px"};
      border-bottom-right-radius: ${(props) =>
        props.IsUserSender ? "10px" : "20px"};
      color: ${(props) => (props.IsUserSender ? "white" : "grey")};
      float: ${(prop) => (prop.IsUserSender ? "right" : "")};
    }
  }
`;
