import styled from "styled-components";

export const StyledButton = styled.button<{ width: string }>`
  width: ${(props) => props.width};
  border-radius: 5px;
  font-family: var(--font-tertiary);
  font-size: 1.2rem;
  height: 50px;
  position: absolute;
  bottom: 20px;
  background-color: transparent;
  background-color: var(--MainColor);
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: #6b6291;
  }
`;
