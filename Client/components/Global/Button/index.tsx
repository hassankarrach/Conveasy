import React from "react";
import { StyledButton } from "./Button.Styled";

interface Input {
  ButtonText: string;
  Width: string;
}

export const ButtonStyled: React.FC<Input> = ({ ButtonText, Width }: Input) => {
  return <StyledButton width={Width}>{ButtonText}</StyledButton>;
};
