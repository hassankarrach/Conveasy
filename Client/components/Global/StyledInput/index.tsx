import React from "react";
import { StylesInput } from "./input.Styled";
//SocketContext
import { UseSockets } from "contexts/Socket.Context";

interface Input {
  PlaceHolder: string;
  ButtonText: string;
  Width: string;
  NoButton?: boolean;
  HandleJoinRoom: Function;
}

export const StyledInput: React.FC<Input> = ({
  PlaceHolder,
  ButtonText,
  Width,
  NoButton,
  HandleJoinRoom,
}: Input) => {
  //SocetContext
  const { setRoom } = UseSockets();

  const HanddlRoomIdInput = (event: any) => {
    setRoom(event.target.value);
  };

  return (
    <StylesInput width_={Width}>
      <input
        onChange={HanddlRoomIdInput}
        className="Input"
        placeholder={`${PlaceHolder}`}
      />
      {!NoButton ? (
        <button
          onClick={() => {
            HandleJoinRoom();
          }}
          className="Join"
        >
          {ButtonText}
        </button>
      ) : (
        ""
      )}
    </StylesInput>
  );
};
